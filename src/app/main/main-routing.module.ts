import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SideNavComponent} from "./side-nav/side-nav.component";

const routes: Routes = [
        {path: '', component: SideNavComponent,children:[
        {path:'users' ,loadChildren:'../users/users.module#UsersModule'}
    ]},

    ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
