import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ROUTES_NAMES } from '../../core/routes/routes.enum';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/app',
  },
  {
    path: ROUTES_NAMES.APP,
    component: LayoutComponent,
    children: [
      {
        path: ROUTES_NAMES.TIMESHEET,
        loadChildren: () =>
          import('../timesheet-management/timesheet-management.module').then(
            (module) => module.TimesheetManagementModule
          ),
      },
    ],
  },
  {
    path: ROUTES_NAMES.TIMESHEET,
    loadChildren: () =>
      import('../timesheet-management/timesheet-management.module').then(
        (module) => module.TimesheetManagementModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
