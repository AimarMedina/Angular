import { Injectable } from "@angular/core";

interface Column {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root',
})

export class ColumnService {
  private columnId = 1; // Start from 1 for better readability
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

  getColumnId(title: string) {
    const column = this.columns.find(column => column.title === title);
    return column?.id;
  }

    private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  
}
