import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import {
  BarcodeScanner,
  BarcodeScannerOptions
} from "@ionic-native/barcode-scanner";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  options: BarcodeScannerOptions;
  results: {};

  constructor(public navCtrl: NavController, private barcode: BarcodeScanner) {}

  async scanBarcode() {
    this.results = await this.barcode.scan();
  }
}
