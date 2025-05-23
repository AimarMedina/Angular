import { ColumnService } from './../../column.service';
import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-column',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-column.component.html',
  styleUrl: './new-column.component.css',
})
export class NewColumnComponent {
  @Output() cancel = new EventEmitter();

  enteredTitle = '';
  constructor(private columnService: ColumnService) {}
  onCancel() {
    this.cancel.emit();
  }

  onAddNewColumn() {
    if (this.enteredTitle.trim() === '') {
      return;
    } else {
      this.columnService.addColumn(this.enteredTitle);
      this.cancel.emit();
    }
  }
}
