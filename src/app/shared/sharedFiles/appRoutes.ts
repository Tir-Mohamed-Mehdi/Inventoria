import { Routes } from '@angular/router';
import { authGuardGuard } from 'src/app/guards/authorizationGuards/auth-guard.guard';
import { jwtExpirationDateGuard } from 'src/app/guards/authorizationGuards/jwt-expiration-date.guard';
import { loginPageGuard } from 'src/app/guards/authorizationGuards/login-page.guard';
import { LoginComponent } from 'src/app/pages/loginPage/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [loginPageGuard],
    component: LoginComponent,
  },
  { path: 'dashboard', redirectTo: `dashboard/admin` },
  {
    path: 'dashboard',
    canActivate: [jwtExpirationDateGuard, authGuardGuard],
    loadChildren: () =>
      import('../../pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModuleModule
      ),
  },
];
