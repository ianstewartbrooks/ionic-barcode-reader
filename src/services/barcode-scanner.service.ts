import { iBarcode } from "../interface/barcode.interface";

export class BarcodeService {
  private barcodes: iBarcode[] = [];

  addBarcode(barcode: iBarcode) {
    this.barcodes.push(barcode);
  }

  getBarcodes() {
    // Return a copy of hte barcodes
    return this.barcodes.slice();
  }
}
