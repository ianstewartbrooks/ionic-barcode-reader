import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { ScanPage } from "../scan/scan";
import { HistoryPage } from "../history/history";
@IonicPage()
@Component({
  selector: "page-tabs",
  templateUrl: "tabs.html"
})
export class TabsPage {
  constructor() {}
  scanPage = ScanPage;
  historyPage = HistoryPage;
}
