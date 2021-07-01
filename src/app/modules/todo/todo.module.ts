import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {TODO_REDUCER_NODE, todoReducer} from "./store/todo/todo.reducer";
import { TodoPageComponent } from './page/todo-page/todo-page.component';
import {RouterModule} from "@angular/router";
import {toDoRoute} from "./routes";
import { TodoWidgetComponent } from './widget/todo-widget/todo-widget.component';
import { TodoCreateFormUiComponent } from './ui/todo-create-form-ui/todo-create-form-ui.component';
import {FormsModule} from "@angular/forms";
import { TodoListUiComponent } from './ui/todo-list-ui/todo-list-ui.component';
import { TodoListItemUiComponent } from './ui/todo-list-item-ui/todo-list-item-ui.component';
import { TodoEditFormUiComponent } from './ui/todo-edit-form-ui/todo-edit-form-ui.component';



@NgModule({
  declarations: [
    TodoPageComponent,
    TodoWidgetComponent,
    TodoCreateFormUiComponent,
    TodoListUiComponent,
    TodoListItemUiComponent,
    TodoEditFormUiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(toDoRoute),
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    FormsModule
  ]
})
export class TodoModule { }
