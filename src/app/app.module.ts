import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtivateGuard } from './ativate.guard';
import { UserService } from './services/user.service';

import { AuthComponent } from './layouts/auth/auth.component';
import { AdminComponent } from './layouts/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AtivateGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
