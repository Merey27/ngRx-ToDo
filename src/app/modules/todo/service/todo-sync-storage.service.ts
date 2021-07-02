import {Injectable} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {todoFeatureSelector} from "../store/todo/todo.selectors";
import {filter} from "rxjs/operators";
import {ToDoState} from "../store/todo/todo.reducer";
import {ToDoLoadAction} from "../store/todo/todo.actions";

export const LOCAL_STORAGE_KEY = 'todo'

@Injectable({
  providedIn: 'root'
})
export class TodoSyncStorageService {
  private isInit = false;

  constructor(private store$: Store<ToDoState>) {
  }

  init() {
    if (this.isInit) {
      return;
    }

    this.isInit = true;
    this.loadFromStorage();

    this.store$.pipe(
      select(todoFeatureSelector),
      filter(state => !!state)
    ).subscribe(state => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state))
    });

    window.addEventListener('storage', () => this.loadFromStorage());
  }

  private loadFromStorage() {
    const storageState = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (storageState) {
      this.store$.dispatch(new ToDoLoadAction({state: JSON.parse(storageState)}))
    }
  }
}
