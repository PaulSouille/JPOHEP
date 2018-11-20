import { Booking } from './../../interface/Booking';
import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DisplayBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display-booking',
  templateUrl: 'display-booking.html',
})
export class DisplayBookingPage {
  user_id:any;
  bookings = new Array<Booking>();
  ifData:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,private apiProvider:ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayBookingPage');
    this.user_id = localStorage.getItem('user_id');

    this.apiProvider.getBookingByid(this.user_id).subscribe(data => {
      console.log(data)
      this.bookings = data['data'];

      if(this.bookings.length!=0){
        this.ifData = true;
      }


      this.bookings.map((oneBooking,i)=>{
        oneBooking.dateTime =new Date(oneBooking.dateTime).getDay().toString()+'/'+new Date(oneBooking.dateTime).getMonth().toString()+'/'+
        new Date(oneBooking.dateTime).getFullYear().toString()+' '+
        new Date(oneBooking.dateTime).getHours().toString()+':'+
        new Date(oneBooking.dateTime).getMinutes().toString()
      })




      

    });


  }

}
