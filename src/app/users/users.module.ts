import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import {SharedModule} from "../shared/shared.module";
import { MainUsersComponent } from './components/main-users/main-users.component';

@NgModule({
  declarations: [MainUsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
      SharedModule
  ]
})
export class UsersModule { }
