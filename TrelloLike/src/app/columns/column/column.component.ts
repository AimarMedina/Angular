import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [],
  templateUrl: './column.component.html',
  styleUrl: './column.component.css'
})
export class ColumnComponent {
  @Input({required:true}) title!:string;
  @Input({required:true}) id!:number;
  @Output() onDelete = new EventEmitter<number>();

  onRemoveColumn() {
    this.onDelete.emit(this.id);
  }
}
