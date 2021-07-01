import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {ToDoCreateAction, ToDoDeleteAction, ToDoEditAction, ToDoToggleAction} from "../../store/todo/todo.actions";
import {ToDoState} from "../../store/todo/todo.reducer";
import {ToDo} from "../../model/todo";
import {todoListSelector} from "../../store/todo/todo.selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.css']
})
export class TodoWidgetComponent implements OnInit {

  constructor(private store$: Store<ToDoState>) {
  }

  todoList$: Observable<ToDo[]> = this.store$.pipe(select(todoListSelector))

  ngOnInit(): void {
  }

  onCreate(name: string) {
    this.store$.dispatch(new ToDoCreateAction({name}))
  }

  onDelete(id: number) {
    this.store$.dispatch(new ToDoDeleteAction({id}))
  }

  onToggle(id: number) {
    this.store$.dispatch(new ToDoToggleAction({id}))
  }

  onEdit({id, name}: any) {
    this.store$.dispatch(new ToDoEditAction({id, name}))
  }
}
