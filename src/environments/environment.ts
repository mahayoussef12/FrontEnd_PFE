// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyA6yZDtkGLrDuuNx3W5wXIHHgAoJNBXVz4",

    authDomain: "push-notification-7916e.firebaseapp.com",

    projectId: "push-notification-7916e",

    storageBucket: "push-notification-7916e.appspot.com",

    messagingSenderId: "479332183657",

    appId: "1:479332183657:web:96d682c8024a6ba69c3cf8",

    measurementId: "G-RCDTKRXKGQ",
    vapidKey: 'BIkeRZMbBKRD3RlMyR6K3w4nnAl9OSpbVEcrZk388CP0gK20wqE4_Z6Nh6lgTo2zPL3FOfGoeYuWT9EA-Pp-JFY'
  },
  api: "http:/localhost:8082/api/events/create",
  test:"http://localhost:8082/api/events",
  url:"http://localhost:8082/api/eventEntreprise"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
