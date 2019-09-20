import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignWikiEditComponent } from './campaign-wiki-edit.component';

describe('CampaignWikiEditComponent', () => {
  let component: CampaignWikiEditComponent;
  let fixture: ComponentFixture<CampaignWikiEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignWikiEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignWikiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
