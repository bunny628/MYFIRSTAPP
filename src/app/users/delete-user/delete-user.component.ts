import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Todos } from "src/app/todos/Models/todos";
import { Users } from "../Models/users";
import { UserService } from "../user.service";
import { toastsService } from "src/app/toast.service";

@Component({
  selector: "app-delete-user",
  templateUrl: "./delete-user.component.html",
  styleUrls: ["./delete-user.component.scss"]
})
export class DeleteUserComponent implements OnInit {
  @Input()
  user: Users;
  constructor(
    private activeModal: NgbActiveModal,
    private userService: UserService,
    private toastService: toastsService
  ) {}

  ngOnInit() {}

  delete() {
    this.userService.deleteUser(this.user.id).subscribe(response=>{
      this.activeModal.close();
      this.toastService.showSuccess("Successfully deleted user.");
    })
  }
}
