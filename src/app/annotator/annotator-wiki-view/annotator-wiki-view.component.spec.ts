import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotatorWikiViewComponent } from './annotator-wiki-view.component';

describe('AnnotatorWikiViewComponent', () => {
  let component: AnnotatorWikiViewComponent;
  let fixture: ComponentFixture<AnnotatorWikiViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnotatorWikiViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotatorWikiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
