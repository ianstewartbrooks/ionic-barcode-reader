import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { iBarcode } from "../../interface/barcode.interface";
import firebase from "firebase";
import {
  BarcodeScanner,
  BarcodeScannerOptions
} from "@ionic-native/barcode-scanner";
// import { BarcodeService } from "../../services/barcode-scanner.service";

@IonicPage()
@Component({
  selector: "page-scan",
  templateUrl: "scan.html"
})
export class ScanPage {
  options: BarcodeScannerOptions;
  results: iBarcode;
  message: string;
  resBarcode: string;

  scannedBarcode = {
    barcode: "",
    status: "open"
  };

  constructor(private barcode: BarcodeScanner) {
    this.firebaseAnonymousLogin();
  }

  async testScan() {
    this.results = await this.barcode.scan();
    this.scannedBarcode.barcode = this.results.text;
    this.message = this.scannedBarcode.barcode;
  }

  async scanBarcode() {
    this.results = await this.barcode.scan();
    if (this.results.cancelled === false) {
      this.scannedBarcode.barcode = this.results.text;
      this.findBarcode(this.scannedBarcode.barcode);
    } else {
      this.message = "User cancelled scan";
    }
  }

  firebaseAnonymousLogin() {
    firebase
      .auth()
      .signInAnonymously()
      .then(userInfo => {
        // Store the UserID;
        // this.uid = userInfo.user.uid;
      })
      .catch(err => {
        console.log(err);
      });
  }

  findBarcode(barcode) {
    let barcodes: any[] = [];
    firebase
      .firestore()
      .collection("barcodes")
      .where("barcode", "==", this.results.text)
      .where("status", "==", "open")
      .get()
      .then(docs => {
        if (docs.size > 0) {
          docs.forEach(doc => {
            barcodes.push(doc);
          });
          this.scannedBarcode.status = "closed";
          this.message = "updated barcode....";
          this.updateBarcode(barcodes[0].id, this.scannedBarcode);
        } else {
          // Add barcode to database
          this.scannedBarcode.status = "open";
          this.message = "added barcode...";
          this.addBarcode(this.scannedBarcode);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateBarcode(docId, barcode) {
    firebase
      .firestore()
      .collection("barcodes")
      .doc(docId)
      .update({
        barcode: barcode.barcode,
        status: "closed",
        user_id: firebase.auth().currentUser.uid,
        updated_date: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(res => {
        this.scannedBarcode.status = "closed";
      })
      .catch(err => {
        console.log(err);
      });
  }

  addBarcode(barcode) {
    // Write our barcode to the firebase firestore database
    firebase
      .firestore()
      .collection("barcodes")
      .add({
        barcode: barcode.barcode,
        status: "open",
        user_id: firebase.auth().currentUser.uid,
        updated_date: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(doc => {
        // Successfully written barcode to firestore
      })
      .catch(err => {
        console.log(err);
      });
  }
}
