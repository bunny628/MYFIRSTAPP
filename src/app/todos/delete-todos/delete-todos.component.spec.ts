import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTodosComponent } from './delete-todos.component';

describe('DeleteTodosComponent', () => {
  let component: DeleteTodosComponent;
  let fixture: ComponentFixture<DeleteTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
