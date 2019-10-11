import { Component, OnInit } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UpdateUserComponent } from "./update-user/update-user.component";
import { DeleteUserComponent } from "./delete-user/delete-user.component";
import { UserService } from "./user.service";
import { Users } from "./Models/users";
import { ThrowStmt } from "@angular/compiler";
import { ActivatedRoute, Router, Params } from "@angular/router";
import { error } from "util";
import { Observable } from "rxjs";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  userData: Users[];

  searchText: string;

  itemLength: number;
  pageSize: number = 5;
  page: number = 1;

  filteredData: any[];

  constructor(
    private addModal: NgbModal,
    private userService: UserService,
    private active: ActivatedRoute,
    private router: Router
  ) {
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
    modal.result.then( () => {
    this.getUserData();
    })
  }

  onDelete(user: Users) {
    const modal = this.addModal.open(DeleteUserComponent);
    modal.componentInstance.user = user;
    modal.result.then(() =>{
      this.getUserData();
    })
    
  }

  // onDelete(id:number){
  //   this.userService.deleteUser(id).subscribe(data=>{
  //     console.log(data);
  //     this.reloadData();
  //   }, error => console.log(error));
  // }

  userDetails(id: number) {
    this.router.navigate(["details", id]);
  }

  getUserData() {
    this.userService.getUsersList().subscribe(response =>{
      this.userData = response;
      this.filteredData = this.userData;
    this.itemLength = this.userData.length;
    })
  }

  pageChange(event) {
    this.page = event;
    this.getUserData();
  }
}
