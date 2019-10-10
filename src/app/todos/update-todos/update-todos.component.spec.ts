import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTodosComponent } from './update-todos.component';

describe('UpdateTodosComponent', () => {
  let component: UpdateTodosComponent;
  let fixture: ComponentFixture<UpdateTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
