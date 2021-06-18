import {Action} from "@ngrx/store";

export enum todoActionsType  {
  create = '[TODO] create todo item',
}

export class ToDoCreateAction implements Action {
  readonly type = todoActionsType.create;

  constructor(
    public payload: {name: string}
  ) {
  }
}

export type TodoActions = ToDoCreateAction
