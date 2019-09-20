import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatorsListComponent } from './annotators-list.component';

describe('AnnotatorsListComponent', () => {
  let component: AnnotatorsListComponent;
  let fixture: ComponentFixture<AnnotatorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotatorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotatorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
