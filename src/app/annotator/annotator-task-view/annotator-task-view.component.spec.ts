import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatorTaskViewComponent } from './annotator-task-view.component';

describe('AnnotatorTaskViewComponent', () => {
  let component: AnnotatorTaskViewComponent;
  let fixture: ComponentFixture<AnnotatorTaskViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotatorTaskViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotatorTaskViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
