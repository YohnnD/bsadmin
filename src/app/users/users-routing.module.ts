import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainUsersComponent} from "./components/main-users/main-users.component";
import {EditUserComponent} from "./components/edit-user/edit-user.component";
const routes: Routes = [
    {path:'',component:MainUsersComponent},
    {path:'edit/:id',component:EditUserComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
