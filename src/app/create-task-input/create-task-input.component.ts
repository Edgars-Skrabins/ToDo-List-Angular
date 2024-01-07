import {Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from "@angular/forms";

export type Task = {
  taskName: string,
  taskDescription: string,
}

@Component({
  selector: 'app-create-task-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './create-task-input.component.html',
  styleUrl: './create-task-input.component.css'
})

export class CreateTaskInputComponent {
  taskName: string = '';
  taskDescription: string = '';

  @Output() taskCreated: EventEmitter<Task> = new EventEmitter<Task>();

  createTask() {
    if(this.taskName === '' && this.taskDescription === '') return;

    console.log("Task Created");
    
    const newTask:Task = {
      taskName: this.taskName,
      taskDescription: this.taskDescription,
    }
    this.taskCreated.emit(newTask);
  }
}
