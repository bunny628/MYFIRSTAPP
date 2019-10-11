import { Injectable } from "@angular/core";
import { Todos } from "./Models/todos";

@Injectable({
  providedIn: "root"
})
export class TodosService {
  todoData = [
    {
      id: "1",
      name: "To do Application",
      description: "make a list of Todos",
      status: "Open",
      owner: "Vannessa"
    },
    {
      id: "2",
      name: "Cook Viand",
      description: "It should be delicious",
      status: "Open",
      owner: "Rolito"
    },
    {
      id: "1236",
      name: "Make Project",
      description: "Deadline tomorrow",
      status: "Open",
      owner: "Karen"
    },
    {
      id: "1237",
      name: "Update Completion Status",
      description: "It should be updated from time to time",
      status: "Open",
      owner: "Riche"
    }
  ];
  constructor() {}

  addtodo(todo: Todos): Todos {
    let id = (
      parseInt(this.todoData[this.todoData.length - 1].id) + 1
    ).toString();
    todo.id = id;
    this.todoData.push(todo);

    return todo;
  }

  getById(id: string) {
    const todoFound = this.todoData.filter(todo => {
      return (todo.id = id);
    });
    return todoFound[0];
  }

  updatetodo(todo: Todos): Todos {
    const found = this.getById(todo.id);
    found.name = todo.name;
    found.description = todo.description;
    found.status = todo.status;
    found.owner = todo.owner;
    return found;
  }

  deletetodo(id: string): Todos {
    const todoId = this.getById(id);
    const index = this.todoData.indexOf(todoId);
    return todoId ? this.todoData.splice(index, 1)[0] : null;
  }

  getTodoData(): Todos[] {
    return this.todoData;
  }

  loadTodoData(page: number, pageSize: number): Todos[] {
    --page;
    return this.todoData.slice(page * pageSize, (page + 1) * pageSize);
  }
}
