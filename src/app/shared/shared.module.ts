import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "./modules/material.module";
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { FooterComponent } from './layout/footer/footer.component';


@NgModule({
  declarations: [ToolbarComponent, FooterComponent],
  imports: [
      CommonModule,
      MaterialModule,
  ],
   exports: [MaterialModule,ToolbarComponent,FooterComponent]
})
export class SharedModule { }
