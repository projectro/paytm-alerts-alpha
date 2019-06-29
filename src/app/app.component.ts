import { Component } from '@angular/core';
import { env } from 'src/environments/environment';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = env.name;
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
