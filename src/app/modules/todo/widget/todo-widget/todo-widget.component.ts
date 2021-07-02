import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {toDoCreateAction, toDoDeleteAction, toDoEditAction, toDoToggleAction} from "../../store/todo/todo.actions";
import {ToDoState} from "../../store/todo/todo.reducer";
import {ToDo} from "../../model/todo";
import {todoListSelector} from "../../store/todo/todo.selectors";
import {Observable} from "rxjs";
import {TodoSyncStorageService} from "../../service/todo-sync-storage.service";

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.css']
})
export class TodoWidgetComponent implements OnInit {

  constructor(private store$: Store<ToDoState>,
              private todoStorageService: TodoSyncStorageService) {
  }

  todoList$: Observable<ToDo[]> = this.store$.pipe(select(todoListSelector))

  ngOnInit(): void {
    this.todoStorageService.init();
  }

  onCreate(name: string) {
    this.store$.dispatch(toDoCreateAction({name}))
  }

  onDelete(id: number) {
    this.store$.dispatch(toDoDeleteAction({id}))
  }

  onToggle(id: number) {
    this.store$.dispatch(toDoToggleAction({id}))
  }

  onEdit({id, name}: any) {
    this.store$.dispatch(toDoEditAction({id, name}))
  }
}
