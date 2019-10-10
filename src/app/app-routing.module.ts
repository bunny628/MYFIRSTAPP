import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { AppComponent } from './app.component';

const routes: Routes = [
 
  {
    path: "users",
    loadChildren: "../app/users/users.module#UsersModule"
  },
  {
    path: "todos",
    loadChildren: "../app/todos/todos.module#TodosModule"
  }

  ];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule{

}