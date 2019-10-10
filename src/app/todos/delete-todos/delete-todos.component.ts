import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Todos } from '../Models/todos';
import { TodosService } from '../todos.service';
import { toastsService } from 'src/app/toast.service';

@Component({
  selector: 'app-delete-todos',
  templateUrl: './delete-todos.component.html',
  styleUrls: ['./delete-todos.component.scss']
})
export class DeleteTodosComponent implements OnInit {

  @Input()
  todos: Todos
  constructor(private activeModal : NgbActiveModal, private todoService: TodosService, private toastService: toastsService) { }

  ngOnInit() {
  }

  
  delete(){
    const deleteTodo = this.todoService.deletetodo(this.todos.id);

    if(deleteTodo){
    this.activeModal.close();
       this.toastService.showSuccess('Successfully deleted');
    }
  }
}
