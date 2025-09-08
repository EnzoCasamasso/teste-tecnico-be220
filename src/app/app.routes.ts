import { Routes } from '@angular/router';
import { isLoggedInGuard } from '@core/guards/is-logged-in/is-logged-in-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('@features/auth/pages/login/login.page').then((m) => m.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('@features/home/pages/home/home.page').then((m) => m.HomeComponent),
    canActivate: [isLoggedInGuard]
  },
];
