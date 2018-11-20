import { RoomPage } from './../room/room';
import { CreateAccountPage } from './../create-account/create-account';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HTTP } from '@ionic-native/http';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the QrCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-code',
  templateUrl: 'qr-code.html',
})
export class QrCodePage {
  room :any;

  constructor(public navCtrl: NavController,private alertCtrl:AlertController,private apiProvider:ApiProvider, public navParams: NavParams, private barcodeScanner: BarcodeScanner,
              private http: HTTP) {}

  ionViewDidLoad() {
    //this.navCtrl.push(RoomPage,{room:1});
    this.barcodeScanner.scan().then(barcodeData => {
      this.navCtrl.push(RoomPage,{room:barcodeData.text});
      //this.scannedCode = barcodeData.text;

    }, (err) => {
      console.log('Error: ', err);
      });

  }

  setAlert(titleAlert,contentAlert){
    let alert = this.alertCtrl.create({
      title: titleAlert,
      subTitle: contentAlert,
      buttons: ['Fermer']
    });
    alert.present();
  }
  qrData = null;
  scannedCode = null;
  scanCode() {
    //this.navCtrl.push(RoomPage,{room:1});
    this.barcodeScanner.scan().then(barcodeData => {
      this.navCtrl.push(RoomPage,{room:barcodeData.text});
      //this.scannedCode = barcodeData.text;

    }, (err) => {
      console.log('Error: ', err);
      });

  }


}
