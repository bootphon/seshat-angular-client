import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignCreationComponent } from './campaign-creation.component';

describe('CampaignCreationComponent', () => {
  let component: CampaignCreationComponent;
  let fixture: ComponentFixture<CampaignCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
