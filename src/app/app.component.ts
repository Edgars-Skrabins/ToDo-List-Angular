import {Component, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CreateTaskInputComponent, Task} from "./create-task-input/create-task-input.component";
import {TaskListComponent} from "./task-list/task-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CreateTaskInputComponent,
    TaskListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(CreateTaskInputComponent) private _createTaskInputComponent!: CreateTaskInputComponent;

  handleTaskCreated($event: Task) {
    console.log($event);
  }
}
