import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth-guards.services';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { AuthService } from './services/auth.services';
import { Routes, RouterModule } from '@angular/router';
import { AppareilService } from './services/appareil.services';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
const appRoutes: Routes=[
    {path:'appareils',canActivate:[AuthGuard],component: AppareilViewComponent},
    {path:'appareils/:id',canActivate:[AuthGuard],component: SingleAppareilComponent},
    {path:'edit',canActivate:[AuthGuard],component: EditAppareilComponent},
    {path:'auth',component: AuthComponent},
    {path:'',component: AuthComponent},
    {path:'users',component:UserListComponent},
    {path:'new-user',component:NewUserComponent},
    {path:'not-found',component:FourOhFourComponent},
    {path:'**',redirectTo:'/not-found'}

]

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      AppareilService,
      AuthService,
      AuthGuard,
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
