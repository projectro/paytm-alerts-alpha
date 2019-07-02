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
  title: string;
  UserStatus: boolean;

  constructor(public afAuth: AngularFireAuth) {
    this.title = env.name;
  }
  login() {
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
