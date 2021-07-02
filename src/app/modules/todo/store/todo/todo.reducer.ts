import {ToDo} from "../../model/todo";
import {TodoActions, todoActionsType} from "./todo.actions";

export const TODO_REDUCER_NODE = 'todo';

export interface ToDoState {
  idIncrement: number;
  toDoList: ToDo[];
}

const initialState: ToDoState = {
  idIncrement: 1,
  toDoList: []
}

export const todoReducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case todoActionsType.create:
      return {
        ...state,
        idIncrement: state.idIncrement + 1,
        toDoList: [
          ...state.toDoList,
          {
            id: state.idIncrement,
            name: action.payload.name,
            completed: false
          }
        ]
      };
    case todoActionsType.toggle:
      return {
        ...state,
        toDoList: state.toDoList.map(todo => todo.id === action.payload.id ? {
          ...todo,
          completed: !todo.completed
        } : todo)
      };
    case todoActionsType.edit:
      return {
        ...state,
        toDoList: state.toDoList.map(todo => todo.id === action.payload.id ? {
          name: action.payload.name
        } : todo)
      };
    case todoActionsType.delete:
      return {
        ...state,
        toDoList: state.toDoList.filter(todo => todo.id !== action.payload.id)
      }
    case todoActionsType.load:
      return {
        ...action.payload.state
      }
    default:
      return state;
  }
}
