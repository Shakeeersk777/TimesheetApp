import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountRootComponent } from './account-root/account-root.component';
import { ROUTES_NAMES } from '../../core/routes/routes.enum';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AccountRootComponent,
    children: [
      {
        path: ROUTES_NAMES.LOGIN,
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
