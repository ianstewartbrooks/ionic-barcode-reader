import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { iBarcode } from "../../interface/barcode.interface";

@IonicPage()
@Component({
  selector: "page-results",
  templateUrl: "results.html"
})
export class ResultsPage {
  results: iBarcode;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.results = this.navParams.data;
  }

  ionViewWillEnter() {}
}
