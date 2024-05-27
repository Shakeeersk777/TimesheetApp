import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetManagementRootComponent } from './timesheet-management-root.component';

describe('TimesheetManagementRootComponent', () => {
  let component: TimesheetManagementRootComponent;
  let fixture: ComponentFixture<TimesheetManagementRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimesheetManagementRootComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimesheetManagementRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
