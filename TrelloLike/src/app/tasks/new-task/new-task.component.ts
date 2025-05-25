import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from '../../task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) columnId!: number;
  @Output() cancel = new EventEmitter();

  enteredTitle = '';
  enteredDescription = '';
  enteredPriority= 'baja' as 'baja' | 'media' | 'alta';
  enteredDate: string = new Date().toISOString().split('T')[0];

  constructor(private taskService: TaskService  ) {}
  onCancel() {
    this.cancel.emit();
  }

  onAddNewColumn() {
    if (this.enteredTitle.trim() === '') {
      return;
    } else {
      console.log(this.enteredPriority)
      this.taskService.addTask(this.enteredTitle, this.enteredDescription, this.columnId , this.enteredPriority, this.enteredDate);
      this.cancel.emit();
    }
  }
}

