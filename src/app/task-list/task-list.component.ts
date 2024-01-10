import {Component, ViewChild} from '@angular/core';
import {TaskCardComponent} from "../task-card/task-card.component";
import {CreateTaskInputComponent, Task} from "../create-task-input/create-task-input.component";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    TaskCardComponent,
    CreateTaskInputComponent,
    NgFor
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  taskCards: Task[] = [];

  @ViewChild(CreateTaskInputComponent) private _createTaskInputComponent!: CreateTaskInputComponent;

  handleTaskCreated(task: Task) {
    this.createTask(task);
  }

  createTask(task:Task) {
    this.taskCards.push(task);
  }

  deleteTask(id:number){
    let taskCardsArr = [...this.taskCards];
    taskCardsArr = taskCardsArr.filter(element => element.taskId !== id);
    this.taskCards = taskCardsArr;
  }

  editTask(id: number) {

  }
}
