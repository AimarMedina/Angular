import { Component } from '@angular/core';
import { ColumnComponent } from "../columns/column/column.component";
import { ColumnService } from '../column.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [ColumnComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {

  constructor(private columnService:ColumnService) {}
  get columns() {
    return this.columnService.getColumns();
  }
  onRemoveColumn(id:number) {
    this.columnService.removeColumn(id);
  }
}
