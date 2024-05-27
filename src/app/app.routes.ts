import { ROUTES, Routes } from '@angular/router';
import { ROUTES_NAMES } from './core/routes/routes.enum';

export const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('../app/modules/layout/layout.module').then(
        (module) => module.LayoutModule
      ),
  },
  {
    path: ROUTES_NAMES.ACCOUNT,
    loadChildren: () =>
      import('../app/modules/accounts/accounts.module').then(
        (module) => module.AccountsModule
      ),
  },
];
