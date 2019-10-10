import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { NgbPagination, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [UsersComponent, UpdateUserComponent, DeleteUserComponent],
  imports: [CommonModule, FormsModule, RouterModule, UsersRoutingModule, NgbModule],
  entryComponents:[UpdateUserComponent,DeleteUserComponent]
})

export class UsersModule {}
