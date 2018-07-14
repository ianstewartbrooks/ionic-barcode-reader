import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { BarcodeService } from "../../services/barcode-scanner.service";
import { iBarcode } from "../../interface/barcode.interface";

@IonicPage()
@Component({
  selector: "page-history",
  templateUrl: "history.html"
})
export class HistoryPage implements OnInit {
  barcodes: iBarcode[] = [];
  count: number = 0;

  constructor(
    private barcodeService: BarcodeService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  // ionViewDidLoad() {
  //   console.log("ionViewDidLoad HistoryPage");
  // }
  ionViewWillEnter() {
    this.barcodes = this.barcodeService.getBarcodes();
    this.count = this.barcodes.length;
  }

  ngOnInit() {
    // this.barcodes = this.barcodeService.getBarcodes();
    // this.count = this.barcodes.length;
  }
}
