import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { iBarcode } from "../../interface/barcode.interface";

import {
  BarcodeScanner,
  BarcodeScannerOptions
} from "@ionic-native/barcode-scanner";
import { BarcodeService } from "../../services/barcode-scanner.service";
import { ResultsPage } from "../results/results";

@IonicPage()
@Component({
  selector: "page-scan",
  templateUrl: "scan.html"
})
export class ScanPage {
  options: BarcodeScannerOptions;
  results: iBarcode;
  barcodes: iBarcode[] = [];
  count: number = 0;
  message: string;

  constructor(
    public navCtrl: NavController,
    private barcode: BarcodeScanner,
    private barcodeService: BarcodeService
  ) {}

  async scanBarcode() {
    this.results = await this.barcode.scan();
    if (this.results.cancelled === false) {
      this.barcodeService.addBarcode(this.results);
      this.barcodes = this.barcodeService.getBarcodes();
      this.count = this.barcodes.length;
      this.navCtrl.push(ResultsPage, this.results);
    } else {
      this.message = "User cancelled scan";
    }
  }
}
