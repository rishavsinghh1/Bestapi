import { Routes } from '@angular/router';
import { AuthloginGuard } from './guards/authlogin.guard';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./Auth/login/login.page').then( m => m.LoginPage),
    canActivate: [AuthloginGuard]
  },
  {
    path: 'register',
    loadComponent: () => import('./Auth/register/register.page').then( m => m.RegisterPage),
    canActivate: [AuthloginGuard]
  },
  {
    path: 'forgot-pwd',
    loadComponent: () => import('./Auth/forgot-pwd/forgot-pwd.page').then( m => m.ForgotPwdPage),
    canActivate: [AuthloginGuard]
  },
  {
    path: 'onboard',
    loadComponent: () => import('./Auth/onboard/onboard.page').then( m => m.OnboardPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then( m => m.DashboardPage),
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'add-project',
    loadComponent: () => import('./pages/add-project/add-project.page').then( m => m.AddProjectPage),
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'my-profile',
    loadComponent: () => import('./pages/my-profile/my-profile.page').then( m => m.MyProfilePage),
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'member-list',
    loadComponent: () => import('./pages/member-list/member-list.page').then( m => m.MemberListPage),
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'project-detail',
    loadComponent: () => import('./pages/project-detail/project-detail.page').then( m => m.ProjectDetailPage),
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'notification',
    loadComponent: () => import('./pages/notification/notification.page').then( m => m.NotificationPage),
    canActivate: [IsLoggedInGuard]
  },
  {
    path: 'change-password',
    loadComponent: () => import('./pages/change-password/change-password.page').then( m => m.ChangePasswordPage),
    canActivate: [IsLoggedInGuard]
  },
];
