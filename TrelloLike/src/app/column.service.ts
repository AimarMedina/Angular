import { Injectable } from "@angular/core";

interface Column {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root',
})

export class ColumnService {
  private columnId = 0;
  private columns: Column[] = [
    { id: this.columnId++, title: 'Por hacer' },
    { id: this.columnId++, title: 'En progreso' },
    { id: this.columnId++, title: 'Terminado' },
  ];

  getColumns() {
    return this.columns;
  }

  addColumn(title: string) {
    const newColumn: Column = {
      id: this.columnId++,
      title,
    };
    this.columns.push(newColumn);
  }
  removeColumn(id: number) {
    this.columns = this.columns.filter(column => column.id !== id);
  }

}
