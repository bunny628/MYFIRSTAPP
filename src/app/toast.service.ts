import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class toastsService {

  toasts: any[]=[];

  show(text: string, body: any={}){
    this.toasts.push({text, ...body});
  }

  remove(toasts){
    this.toasts = this.toasts.filter(t => t != toasts)
  }
  constructor() { }

  showSuccess(text: string){
    this.show(text, {
      autohide: true,
      className: "p-0 m-0 text-center bg-success text-light",
      delay: 5000
    });
  }
}
