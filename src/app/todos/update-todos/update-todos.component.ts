import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Todos } from "../Models/todos";
import { TodosService } from "../todos.service";
import { toastsService } from "src/app/toast.service";

@Component({
  selector: "app-update-todos",
  templateUrl: "./update-todos.component.html",
  styleUrls: ["./update-todos.component.scss"]
})
export class UpdateTodosComponent implements OnInit {
  @Input()
  todo: Todos;
  name: string;
  description: string;
  status: string;
  owner: string;

  title: string;

  constructor(
    private activeModal: NgbActiveModal,
    private todoService: TodosService,
    private toastService: toastsService
  ) {}

  ngOnInit() {
    this.title = this.todo ? "Edit todo" : "Add todo";
    this.name = this.todo ? this.todo.name : "";
    this.description = this.todo ? this.todo.description : "";
    this.status = this.todo ? this.todo.status : "";
    this.owner = this.todo ? this.todo.owner : "";
  }

  submit() {
    if (this.todo) {
      let edit: Todos = {
        id: this.todo.id,
        name: this.name,
        description: this.description,
        status: this.status,
        owner: this.owner
      };
      const result = this.todoService.updatetodo(edit);
      this.activeModal.close();
      this.toastService.showSuccess("Updated Todo");
    } else {
      let add: Todos = {
        id: "",
        name: this.name,
        description: this.description,
        status: this.status,
        owner: this.owner
      };
      const result = this.todoService.addtodo(add);
      this.activeModal.close();
      this.toastService.showSuccess("Successfully Added");
    }
  }
}
