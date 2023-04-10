import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path: 'login',redirectTo: 'login',pathMatch: 'full'},
  {path: 'login',loadChildren: () => import('./auth-components/login/login.module').then( m => m.LoginPageModule)},
  {
    path: 'people',
    loadChildren: () => import('./peoples/people/people.module').then( m => m.PeoplePageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'user-comments',
    loadChildren: () => import('./peoples/user-comments/user-comments.module').then( m => m.UserCommentsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
