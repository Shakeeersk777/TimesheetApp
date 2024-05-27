import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetTemplateComponent } from './timesheet-template.component';

describe('TimesheetTemplateComponent', () => {
  let component: TimesheetTemplateComponent;
  let fixture: ComponentFixture<TimesheetTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimesheetTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimesheetTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
