import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatorsViewComponent } from './annotators-view.component';

describe('AnnotatorsViewComponent', () => {
  let component: AnnotatorsViewComponent;
  let fixture: ComponentFixture<AnnotatorsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotatorsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotatorsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
