import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatorCreationComponent } from './annotator-creation.component';

describe('AnnotatorCreationComponent', () => {
  let component: AnnotatorCreationComponent;
  let fixture: ComponentFixture<AnnotatorCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotatorCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotatorCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
