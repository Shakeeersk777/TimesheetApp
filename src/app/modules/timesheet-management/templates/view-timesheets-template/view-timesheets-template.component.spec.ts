import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTimesheetsTemplateComponent } from './view-timesheets-template.component';

describe('ViewTimesheetsTemplateComponent', () => {
  let component: ViewTimesheetsTemplateComponent;
  let fixture: ComponentFixture<ViewTimesheetsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTimesheetsTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewTimesheetsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
