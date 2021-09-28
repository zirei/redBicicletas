// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  biciApi: 'http://localhost:3000',
  userApi: 'http://localhost:3001',
  geoApi: 'http://localhost:3002',
  firebaseConfig : {
  apiKey: "AIzaSyArwXcrwqn1wIvnkcrWV6cfBLLRdXkPlfA",
  authDomain: "redbicis-18118.firebaseapp.com",
  projectId: "redbicis-18118",
  storageBucket: "redbicis-18118.appspot.com",
  messagingSenderId: "1035971037554",
  appId: "1:1035971037554:web:2a2b960e7ad5fe654835eb",
  measurementId: "G-40D62RTVVS"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
