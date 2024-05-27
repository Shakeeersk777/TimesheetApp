import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesheetManagementRoutingModule } from './timesheet-management-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterOutlet } from '@angular/router';
import { TimesheetManagementRootComponent } from './timesheet-management-root/timesheet-management-root.component';
import { TimesheetTemplateComponent } from './templates/timesheet-template/timesheet-template.component';
import { ViewTimesheetsComponent } from './components/view-timesheets/view-timesheets.component';
import { ViewTimesheetsTemplateComponent } from './templates/view-timesheets-template/view-timesheets-template.component';
import { DashboardTemplateComponent } from './templates/dashboard-template/dashboard-template.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileTemplateComponent } from './templates/profile-template/profile-template.component';
@NgModule({
  declarations: [
    DashboardComponent,
    TimesheetComponent,
    TimesheetManagementRootComponent,
    TimesheetTemplateComponent,
    ViewTimesheetsComponent,
    ViewTimesheetsTemplateComponent,
    DashboardTemplateComponent,
    ProfileComponent,
    ProfileTemplateComponent,
  ],
  imports: [
    CommonModule,
    TimesheetManagementRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    NgxMaterialTimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    RouterOutlet,
  ],
})
export class TimesheetManagementModule {}
