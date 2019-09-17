import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatorAssignedTasksComponent } from './annotator-assigned-tasks.component';

describe('AnnotatorAssignedTasksComponent', () => {
  let component: AnnotatorAssignedTasksComponent;
  let fixture: ComponentFixture<AnnotatorAssignedTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotatorAssignedTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotatorAssignedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
