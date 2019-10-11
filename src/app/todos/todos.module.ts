import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodosComponent } from "./todos.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TodosRoutingModule } from "./todos-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { DeleteTodosComponent } from "./delete-todos/delete-todos.component";
import { UpdateTodosComponent } from "./update-todos/update-todos.component";

@NgModule({
  declarations: [TodosComponent, DeleteTodosComponent, UpdateTodosComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    TodosRoutingModule,
    NgbModule
  ],
  entryComponents: [DeleteTodosComponent, UpdateTodosComponent]
})
export class TodosModule {}
