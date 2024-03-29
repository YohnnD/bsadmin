import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
    { path:'',component:LoginComponent},
    {path:'login',component:LoginComponent},
    {path:'home/logout/:sure',component:LoginComponent},
    {path:'home',loadChildren:'./main/main.module#MainModule'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
