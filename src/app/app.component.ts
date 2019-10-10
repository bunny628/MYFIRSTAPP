import { Component } from '@angular/core';
import { toastsService } from './toast.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public toastService : toastsService){

  }

}
