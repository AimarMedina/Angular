import { TaskService } from './../../task.service';
import { NgClass, TitleCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TitleCasePipe,NgClass],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) date!: string;
  @Input({ required: true }) priority!: string;
  @Input({ required: true }) id!: string;
  @Input({ required: true }) columnId!: number;

  constructor(private taskService: TaskService) {}
  onDelete() {
    this.taskService.deleteTask(this.id);
  }
}
