import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";
import firebase from "firebase";

@IonicPage()
@Component({
  selector: "page-history",
  templateUrl: "history.html"
})
export class HistoryPage {
  barcodes: any[] = [];
  uid: string;

  constructor() {}

  async ionViewWillEnter() {
    this.barcodes = await this.getAllBarcodes();
  }

  getAllBarcodes(): any {
    // Get all barcodes to show on history page
    console.log("getting barcodes");
    let dbBarcodes: any[] = [];
    firebase
      .firestore()
      .collection("barcodes")
      .orderBy("updated_date", "desc")
      .get()
      .then(docs => {
        docs.forEach(doc => {
          dbBarcodes.push(doc);
        });
        this.barcodes = dbBarcodes;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
