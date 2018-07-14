import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ScanPage } from "../scan/scan";
import { HistoryPage } from "../history/history";

@IonicPage()
@Component({
  selector: "page-tabs",
  templateUrl: "tabs.html"
})
export class TabsPage {
  scanPage = ScanPage;
  historyPage = HistoryPage;
}
