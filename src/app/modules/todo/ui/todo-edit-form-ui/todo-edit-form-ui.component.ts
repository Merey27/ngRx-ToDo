import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from "../../model/todo";

@Component({
  selector: 'app-todo-edit-form-ui',
  templateUrl: './todo-edit-form-ui.component.html',
  styleUrls: ['./todo-edit-form-ui.component.css']
})
export class TodoEditFormUiComponent implements OnInit {
  name: string | undefined;

  @Input()
  toDo: ToDo | undefined;

  @Output()
  edit = new EventEmitter<string>()

  constructor() {
  }

  ngOnInit(): void {
    this.name = this.toDo?.name;
  }

  onEdit() {
    if (this.name) {
      this.edit.emit(this.name);
    }

  }

  onCancel() {
    this.name = this.toDo?.name;
  }
}
