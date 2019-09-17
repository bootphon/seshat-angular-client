import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatorTaskListComponent } from './annotator-task-list.component';

describe('AnnotatorTaskListComponent', () => {
  let component: AnnotatorTaskListComponent;
  let fixture: ComponentFixture<AnnotatorTaskListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotatorTaskListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotatorTaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
