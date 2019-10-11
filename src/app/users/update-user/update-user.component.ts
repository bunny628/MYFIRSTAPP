import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "../user.service";
import { Users } from "../Models/users";
import { toastsService } from "src/app/toast.service";

@Component({
  selector: "app-update-user",
  templateUrl: "./update-user.component.html",
  styleUrls: ["./update-user.component.scss"]
})
export class UpdateUserComponent implements OnInit {
  @Input()
  user: Users;
  firstName: string;
  lastName: string;
  occupation: string;
  profilePicture: string;
  title: string;

  constructor(
    private activeModal: NgbActiveModal,
    private userService: UserService,
    private toastService: toastsService
  ) {}

  ngOnInit() {
    this.title = this.user ? "Edit User" : "Add User";
    this.firstName = this.user ? this.user.firstName : "";
    this.lastName = this.user ? this.user.lastName : "";
    this.occupation = this.user ? this.user.occupation : "";
    this.profilePicture = this.user ? this.user.profilePicture : "";
  }

  submit() {
    if (this.user) {
      let edit: Users = {
        id: this.user.id,
        firstName: this.firstName,
        lastName: this.lastName,
        occupation: this.occupation,
        profilePicture: this.profilePicture
      };
      this.userService.updateUser(edit.id,edit).subscribe(response =>{
        this.activeModal.close();
        this.toastService.showSuccess("Successfully updated user.");
      });
      
      
    } else {
      let add: Users = {
        id: "",
        firstName: this.firstName,
        lastName: this.lastName,
        occupation: this.occupation,
        profilePicture: this.profilePicture
      };
      this.userService.createUser(add).subscribe(response =>{
        this.activeModal.close();
        this.toastService.showSuccess("Successfully added user.");
      })
    }
  }
}
