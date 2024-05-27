import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesheetComponent } from './components/timesheet/timesheet.component';
import { ViewTimesheetsComponent } from './components/view-timesheets/view-timesheets.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ROUTES_NAMES } from '../../core/routes/routes.enum';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: TimesheetComponent,
  },
  { path: 'view-timesheet', component: ViewTimesheetsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: ROUTES_NAMES.USER_PROFILE, component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimesheetManagementRoutingModule {}
