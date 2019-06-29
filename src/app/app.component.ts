import { Component, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.test';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = environment.name;
  data: any;
  name: string;
  dbname: string;
  constructor(public afAuth: AngularFireAuth) {
    this.data = this.afAuth.user;
    this.dbname = this.data;
  }
  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
