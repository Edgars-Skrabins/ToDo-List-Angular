import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Task } from '../create-task-input/create-task-input.component';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css',
})
export class TaskCardComponent {
  isInEditMode = false;
  @Input() taskId: number = 0;
  @Input() taskName: string = '';
  @Input() taskDescription: string = '';

  beforeEditTaskName = '';
  beforeEditTaskDescription = '';

  @Output() onDeleteBtnClicked: EventEmitter<number> =
    new EventEmitter<number>();

  @Output()
  onEditConfirmBtnClicked: EventEmitter<Task> = new EventEmitter<Task>();

  deleteBtnClick() {
    this.onDeleteBtnClicked.emit(this.taskId);
  }

  editBtnClick() {
    this.isInEditMode = true;
    this.beforeEditTaskName = this.taskName;
    this.beforeEditTaskDescription = this.taskDescription;
  }

  cancelEdit() {
    this.isInEditMode = false;
    this.taskName = this.beforeEditTaskName;
    this.taskDescription = this.beforeEditTaskDescription;
  }

  confirmEdit() {
    this.isInEditMode = false;
    const thisTask: Task = {
      id: this.taskId,
      taskName: this.taskName,
      taskDescription: this.taskDescription,
    };
    this.onEditConfirmBtnClicked.emit(thisTask);
  }
}
