import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToDo} from "../../model/todo";

@Component({
  selector: 'app-todo-list-item-ui',
  templateUrl: './todo-list-item-ui.component.html',
  styleUrls: ['./todo-list-item-ui.component.css']
})
export class TodoListItemUiComponent implements OnInit {

  @Input()
  todo: ToDo | undefined;

  @Output()
  delete = new EventEmitter<void>();

  @Output()
  toggle = new EventEmitter<void>();

  @Output()
  edit = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete() {
    this.delete.emit();
  }

  onToggle(event: Event) {
    event.preventDefault();
    this.toggle.emit();
  }

  onEdit() {
    this.edit.emit();
  }
}
