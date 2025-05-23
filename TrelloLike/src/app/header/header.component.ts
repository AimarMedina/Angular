import { Component } from '@angular/core';
import { NewColumnComponent } from "../columns/new-column/new-column.component";
import { ColumnService } from '../column.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NewColumnComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isAddingColumn = false;
  onAddNewColumn() {
    this.isAddingColumn = true;
  }

  onCancel(){
    this.isAddingColumn = false;
  }

  constructor(private columnService:ColumnService) {}
  get columns() {
    return this.columnService.getColumns();
  }

  onAddNewTask(){
    
  }

}
