import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TODO_REDUCER_NODE, ToDoState} from "./todo.reducer";

export const todoFeatureSelector = createFeatureSelector<ToDoState>(TODO_REDUCER_NODE);

export const todoListSelector = createSelector(
  todoFeatureSelector,
  state => state.toDoList
)
