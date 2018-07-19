import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

import { MyApp } from "./app.component";
import { ScanPage } from "../pages/scan/scan";
import { TabsPage } from "../pages/tabs/tabs";
import { HistoryPage } from "../pages/history/history";

// Import and setup firebase firestore
// Create yourself a firebase credentials file in this directory and
// copy in your firebase config with the following layout:
//
// export const firebaseCredentials = {
//   firebase: {
//       apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAINm",
//   databaseURL: "YOUR_DATABASE_URL",
//   projectId: "YOUR_PROJECT_IDr",
//   storageBucket: "YOUR_STORAGE_BUCKETm",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
//   }
// }

import { firebaseCredentials } from "./firebase.credentials";
import firebase from "firebase";

firebase.initializeApp(firebaseCredentials.firebase);
firebase.firestore().settings({
  timestampsInSnapshots: true
});

@NgModule({
  declarations: [MyApp, ScanPage, TabsPage, HistoryPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, ScanPage, TabsPage, HistoryPage],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
