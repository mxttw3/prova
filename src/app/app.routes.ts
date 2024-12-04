import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./users/users.page').then(m => m.UsersPage) },
  {
    path: 'new-users',
    loadComponent: () => import('./new-users/new-users.page').then( m => m.NewUsersPage)
  },
  {
    path: 'user-details/:index',
    loadComponent: () => import('./user-details/user-details.page').then( m => m.UserDetailsPage)
  },
];
