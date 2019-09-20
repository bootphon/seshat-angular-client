import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTaskViewComponent } from './admin-task-view.component';

describe('AdminTaskViewComponent', () => {
  let component: AdminTaskViewComponent;
  let fixture: ComponentFixture<AdminTaskViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTaskViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTaskViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
