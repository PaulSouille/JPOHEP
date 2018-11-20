import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


@NgModule({
  declarations: [
    BarcodeScanner,
  ],
  imports: [
    IonicPageModule.forChild(BarcodeScanner),
  ],

})
export class QrCodePageModule {}
