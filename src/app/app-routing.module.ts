import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: './login/login.module#LoginModule',
  },
  {
    path: 'admin',
    redirectTo: './admin/admin.module#AdminModule',
    canActivate: [],
  },
  {
    path: 'annotator',
    loadChildren: './annotator/annotator.module#AnnotatorModule' ,
    canActivate: [],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
