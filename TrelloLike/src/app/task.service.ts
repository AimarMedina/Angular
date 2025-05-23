export class TaskService{
  private tasks: { [key: string]: string[] } = {
    'To Do': [],
    'In Progress': [],
    'Done': []
  };

  addTask(column: string, task: string) {
    if (this.tasks[column]) {
      this.tasks[column].push(task);
    }
  }

  getTasks(column: string): string[] {
    return this.tasks[column] || [];
  }

  removeTask(column: string, task: string) {
    if (this.tasks[column]) {
      this.tasks[column] = this.tasks[column].filter(t => t !== task);
    }
  }
}
