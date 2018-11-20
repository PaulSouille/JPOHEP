import { BookingUser } from './../../interface/BookingUser';
import { Booking } from './../../interface/Booking';
import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  bookingsUser = new Array<BookingUser>();
  ifData:boolean = false;
  constructor(public navCtrl: NavController,private alertCtrl : AlertController,private apiProvider : ApiProvider, public navParams: NavParams) {
  }

  onValidateBooking(bookingId){
    this.apiProvider.validateBookingById(bookingId).subscribe(data => {
      if(data['error']=="SUCCESS"){
        this.setAlert('Succès','Réservation validée')
      }
        })
        }
  onDeleteBooking(bookingId){
    this.apiProvider.deleteBookingById(bookingId).subscribe(data => {
      if(data['error']=="SUCCESS"){
        this.setAlert('Succès','Réservation supprimée')
      }
        })
      }


    setAlert(titleAlert,contentAlert){
      let alert = this.alertCtrl.create({
        title: titleAlert,
        subTitle: contentAlert,
        buttons: ['Fermer']
      });
      alert.present();
    }
 
  ionViewDidLoad() {
    this.apiProvider.getAllBookings().subscribe(data => {



      this.bookingsUser = data['data'];

      if(this.bookingsUser.length!=0){
        this.ifData = true;
      }

      this.bookingsUser.map((oneBooking,i)=>{
        oneBooking.dateTime =new Date(oneBooking.dateTime).getDay().toString()+'/'+new Date(oneBooking.dateTime).getMonth().toString()+'/'+
        new Date(oneBooking.dateTime).getFullYear().toString()+' '+
        new Date(oneBooking.dateTime).getHours().toString()+':'+
        new Date(oneBooking.dateTime).getMinutes().toString()
      })
    });
    }
}
