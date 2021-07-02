import {ToDo} from "../../model/todo";
import {Action, createReducer, on} from "@ngrx/store";
import * as ToDoActions from "./todo.actions"

export const TODO_REDUCER_NODE = 'todo';

export interface ToDoState {
  idIncrement: number;
  toDoList: ToDo[];
}

const initialState: ToDoState = {
  idIncrement: 1,
  toDoList: []
}

export const todoReducer = createReducer(
  initialState,
  on(ToDoActions.toDoCreateAction, (state, action) => ({
    ...state,
    idIncrement: state.idIncrement + 1,
    toDoList: [
      ...state.toDoList,
      {
        id: state.idIncrement,
        name: action.name,
        completed: false
      }
    ]
  })),
  on(ToDoActions.toDoToggleAction, (state, action) => ({
    ...state,
    toDoList: state.toDoList.map(todo => todo.id === action.id ? {
      ...todo,
      completed: !todo.completed
    } : todo)
  })),
  on(ToDoActions.toDoEditAction, (state, action) => ({
    ...state,
    toDoList: state.toDoList.map(todo => todo.id === action.id ? {
      ...todo,
      name: action.name
    } : todo)
  })),
  on(ToDoActions.toDoDeleteAction, (state, action) => ({
    ...state,
    toDoList: state.toDoList.filter(todo => todo.id !== action.id)
  })),
  on(ToDoActions.toDoLoadAction, (state, action) => ({
    ...action.state
  })),
)

export function reducer(state: ToDoState | undefined, action: Action) {
  return todoReducer(state, action);
}
