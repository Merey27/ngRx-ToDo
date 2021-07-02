import {createAction, props} from "@ngrx/store";
import {ToDoState} from "./todo.reducer";

export enum todoActionsType {
  create = '[TODO] create todo item',
  delete = '[TODO] delete todo item',
  toggle = '[TODO] toggle todo item',
  edit = '[TODO] edit todo item',
  load = '[TODO] load todo item'
}

export const toDoCreateAction = createAction(todoActionsType.create, props<{ name: string }>())
export const toDoDeleteAction = createAction(todoActionsType.delete, props<{ id: number }>())
export const toDoToggleAction = createAction(todoActionsType.toggle, props<{ id: number }>())
export const toDoEditAction = createAction(todoActionsType.edit, props<{ id: number, name: string }>())
export const toDoLoadAction = createAction(todoActionsType.load, props<{ state: ToDoState }>())
