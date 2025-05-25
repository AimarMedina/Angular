import { Injectable } from "@angular/core";

interface Task {
  id: string;
  title: string;
  description: string;
  columnId: number;
  date: string;
  priority: string;
}

@Injectable({
  providedIn: 'root'
})

export class TaskService{
  private tasks: Task[] = [];

  addTask(title: string, description: string, columnId: number, priority: string, date: string) {
    const newTask: Task = {
      id: this.generateId(),
      title,
      description,
      columnId,
      date,
      priority
    };
    this.tasks.push(newTask);
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  private generateId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

}
