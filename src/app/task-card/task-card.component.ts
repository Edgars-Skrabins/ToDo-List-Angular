import {Component, EventEmitter, Input, Output} from '@angular/core';
import axios from "axios";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  isInEditMode = false;
  @Input() taskId:number = 0;
  @Input() taskName:string = '';
  @Input() taskDescription:string = '';

  @Output() onDeleteBtnClicked: EventEmitter<number> = new EventEmitter<number>();
  @Output() onEditBtnClicked: EventEmitter<number> = new EventEmitter<number>();


  deleteBtnClick() {
    this.onDeleteBtnClicked.emit(this.taskId);
  }
  editBtnClick() {
    this.onEditBtnClicked.emit(this.taskId);
  }
}
