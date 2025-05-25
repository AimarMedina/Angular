import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "../../tasks/task/task.component";
import { NewTaskComponent } from "../../tasks/new-task/new-task.component";
import { ColumnService } from '../../column.service';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [NewTaskComponent, TaskComponent],
  templateUrl: './column.component.html',
  styleUrl: './column.component.css'
})
export class ColumnComponent {
  @Input({required:true}) title!:string;
  @Input({required:true}) id!:number;

  isAddingTask = false;


  constructor(private taskService: TaskService,private columnService: ColumnService) {}
  get tasks(){
    return this.taskService.getTasks().filter(task => task.columnId === this.id);
  }

  onCancel() {
    this.isAddingTask = false;
  }


  onRemoveColumn() {
    this.columnService.removeColumn(this.id);
    this.taskService.getTasks().forEach(task => {
      if (task.columnId === this.id) {
        this.taskService.deleteTask(task.id);
      }
    });
  }

  onAddTask() {
    this.isAddingTask = true;
  }


  getTasksColumn() {
    return this.taskService.getTasks().filter(task => task.columnId === this.id);
  }


}
