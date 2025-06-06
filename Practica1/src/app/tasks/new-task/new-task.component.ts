import { TasksService } from './../tasks.service';
import { NewTask } from './../task/task.model';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input ({ required: true }) userId!: string;
  @Output() close = new EventEmitter();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService);

  onCloseTask() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.onAddTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
      },
      this.userId
    );
      this.close.emit();
  }
}
