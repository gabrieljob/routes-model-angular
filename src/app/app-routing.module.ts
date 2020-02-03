import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AuthComponent } from './layouts/auth/auth.component';
import { AdminComponent } from './layouts/admin/admin.component';


const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: '', 
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth/auth.module#AuthModule'
      }
    ]
  },
  {
    path: '', 
    component: AdminComponent, 
    children: [
      {
        path: '',
        loadChildren: './layouts/admin/admin.module#AdminModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
