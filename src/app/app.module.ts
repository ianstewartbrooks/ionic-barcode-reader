import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { ScanPage } from "../pages/scan/scan";
import { ResultsPage } from "../pages/results/results";
import { TabsPage } from "../pages/tabs/tabs";
import { HistoryPage } from "../pages/history/history";
import { BarcodeService } from "../services/barcode-scanner.service";

@NgModule({
  declarations: [MyApp, ScanPage, ResultsPage, TabsPage, HistoryPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, ScanPage, ResultsPage, TabsPage, HistoryPage],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    BarcodeService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
