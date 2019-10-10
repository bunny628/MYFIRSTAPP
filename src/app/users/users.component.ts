import { Component, OnInit } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UpdateUserComponent } from "./update-user/update-user.component";
import { DeleteUserComponent } from "./delete-user/delete-user.component";
import { UserService } from "./user.service";
import { Users } from './Models/users';

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  userData: any[];
  title = "my-app";

  searchText: string;

  itemLength: number;
  pageSize: number = 5;
  page: number = 1;

  filteredData: any[];

  constructor(private addModal: NgbModal, private userService: UserService) {
    // this.filteredData = this.userService.getUserData();
  }
  ngOnInit() {
    this.getUserData();
  }

  onSearch() {
    const searchText = this.searchText.toLowerCase();

    if (searchText) {
      this.filteredData = this.userService.getUserData().filter(user => {
        return (
          user.firstName.toLowerCase().includes(searchText) ||
          user.lastName.toLowerCase().includes(searchText) ||
          user.occupation.toLowerCase().includes(searchText)
        );
      });
    } else {
      this.filteredData = this.userService.getUserData();
    }
  }

  onUpdate(user: Users) {
    const modal = this.addModal.open(UpdateUserComponent);
    modal.componentInstance.user = user;
  }

  onDelete(user: Users) {
    const modal = this.addModal.open(DeleteUserComponent);
    modal.componentInstance.user = user;

    console.log(user);
  }

  getUserData() {
    this.userData = this.userService.loadUserData(this.page, this.pageSize);
    this.filteredData = this.userData;
    this.itemLength = this.userService.getUserData().length;
  }

  pageChange(event) {
    this.page = event;
    this.getUserData();
  }
}
