import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule, NgbToastModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { UserService } from './users/user.service';
import { TodosService } from './todos/todos.service';
import {  toastsService } from './toast.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    UsersModule,
    TodosModule,
    NgbModule,
    NgbToastModule
  ],
  providers: [UserService, TodosService, toastsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
