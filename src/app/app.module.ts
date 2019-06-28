import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment.test';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'testing')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
