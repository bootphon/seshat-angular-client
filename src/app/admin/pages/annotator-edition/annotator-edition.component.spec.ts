import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatorEditionComponent } from './annotator-edition.component';

describe('AnnotatorEditionComponent', () => {
  let component: AnnotatorEditionComponent;
  let fixture: ComponentFixture<AnnotatorEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotatorEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotatorEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
