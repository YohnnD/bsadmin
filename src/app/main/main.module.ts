import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import {SharedModule} from "../shared/shared.module";
import {UsersModule} from "../users/users.module";
import { MatToolbarModule, MatButtonModule,MatIconModule, MatListModule } from '@angular/material';
import {SideNavComponent} from "./side-nav/side-nav.component";
@NgModule({
    declarations:[SideNavComponent],
  imports: [
      CommonModule,
      MainRoutingModule,
      SharedModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatListModule,
      UsersModule
      ],

})
export class MainModule { }
