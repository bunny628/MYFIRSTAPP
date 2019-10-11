import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params, ParamMap } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DeleteTodosComponent } from "./delete-todos/delete-todos.component";
import { UpdateTodosComponent } from "./update-todos/update-todos.component";
import { TodosService } from "./todos.service";
import { Todos } from "./Models/todos";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"]
})
export class TodosComponent implements OnInit {
  todoData: any[];
  title = "Todos";

  itemLength: number;
  pageSize: number = 2;
  page: number = 1;

  searchText: string;
  filteredData: any[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private addModal: NgbModal,
    private todoService: TodosService
  ) {
    // this.filteredData = this.todoData;
  }

  ngOnInit() {
    console.log("[TodosComponent] On Init!");

    this.getTodoData();
    // Get the user id from URL
    this.activatedRoute.paramMap.subscribe(
      // Callback function
      (paramMap: ParamMap) => {
        console.log("User ID!!!");
        const userId = paramMap.get("userId");

        if (userId) {
          // Filter todos by owner (user id)
          this.filteredData = this.todoData.filter(todo => {
            return todo.owner === userId;
          });
        }
      }
    );
  }

  onSearch() {
    const searchText = this.searchText.toLowerCase();

    if (searchText) {
      this.filteredData = this.todoData.filter(todo => {
        return (
          todo.name.toLowerCase().includes(searchText) ||
          todo.description.toLowerCase().includes(searchText)
        );
      });
    } else {
      this.filteredData = this.todoService.getTodoData();
    }
  }

  onUpdate(todo) {
    const modal = this.addModal.open(UpdateTodosComponent);
    modal.componentInstance.todo = todo;
  }

  onDelete(todo: Todos) {
    const modal = this.addModal.open(DeleteTodosComponent);
    modal.componentInstance.todo = todo;

    console.log(todo);
  }

  newTodo() {
    this.router.navigate(["todo/new"]);
  }

  getTodoData() {
    this.todoData = this.todoService.loadTodoData(this.page, this.pageSize);
    this.filteredData = this.todoData;
    this.itemLength = this.todoService.getTodoData().length;
  }

  pageChange(event) {
    this.page = event;
    this.getTodoData();
  }
}
