import { Routes } from '@angular/router';

import { AdminComponent } from 'src/app/views/admin/admin.component';
import { AtivateGuard } from 'src/app/ativate.guard';

export const AdminLayoutRoutes: Routes = [
    { path: 'admin', component: AdminComponent, canActivate: [AtivateGuard] }
];