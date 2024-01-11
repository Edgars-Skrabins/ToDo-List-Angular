import { Component, ViewChild } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import {
  CreateTaskInputComponent,
  Task,
} from '../create-task-input/create-task-input.component';
import { NgFor } from '@angular/common';
import {
  deleteTaskById,
  editTaskById,
  getAllTasks,
  postTask,
} from '../api/api';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskCardComponent, CreateTaskInputComponent, NgFor],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  taskCards: Task[] = [];

  @ViewChild(CreateTaskInputComponent)
  private _createTaskInputComponent!: CreateTaskInputComponent;

  constructor() {
    this.loadTasksFromDB()
      .then((response) => {
        console.log('Successfully loaded tasks from database!', response);
      })
      .catch((error) => {
        console.error('Failed to load tasks from database!', error);
      });
  }

  async loadTasksFromDB() {
    this.taskCards = await getAllTasks();
  }

  handleTaskCreateBtnClick(task: Task) {
    this.createTask(task);
  }

  createTask(task: Task) {
    this.taskCards.push(task);
    postTask(task);
  }

  deleteTask(id: number) {
    let taskCardsArr = [...this.taskCards];
    taskCardsArr = taskCardsArr.filter((element) => element.id !== id);
    this.taskCards = taskCardsArr;
    deleteTaskById(id);
  }

  editTask(task: Task) {
    editTaskById(task);
  }
}
