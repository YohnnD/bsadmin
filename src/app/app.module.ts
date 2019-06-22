import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { LayoutModule } from '@angular/cdk/layout'
import {SharedModule} from "./shared/shared.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MatToolbarModule, MatButtonModule,MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      LayoutModule,
      MatToolbarModule,
      MatButtonModule,
      MatIconModule,
      MatListModule,
      SharedModule,
      FormsModule,
      HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
