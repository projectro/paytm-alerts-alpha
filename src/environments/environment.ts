// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const env = {
  production: false,
  name: 'PayTM Alerts (Testing)',
  googleWebClientId: '963636994965-r2usbusf3r4dhgoq1acivuuqq9ph54p2.apps.googleusercontent.com',
  googleWebClientSecret: 'Q58K3jVe1_27wvD9UF6n6Z5I',
  // FIREBASE
    firebaseConfig : {
    apiKey: 'AIzaSyASwKv4bN5nDOWl916USyJ68uMRX8B6iD4',
    authDomain: 'd-t-paytm-alerts-alpha.firebaseapp.com',
    databaseURL: 'https://d-t-paytm-alerts-alpha.firebaseio.com',
    projectId: 'd-t-paytm-alerts-alpha',
    storageBucket: '',
    messagingSenderId: '963636994965',
    appId: '1:963636994965:web:d0ee24c4ad3838b6'
  }
  // END
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
