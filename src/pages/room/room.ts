import { PopoverPage } from './../popover/popover';
import { ApiProvider } from './../../providers/api/api';
import { Room } from './../../interface/Room';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
/**
 * Generated class for the RoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {
  room : Room;
  test:String;
  roomName : String;
  roomDescription: String;
  roomImgPath : String;
  roomPath:String;
  constructor(public navCtrl: NavController,private popoverCtrl : PopoverController,private apiProvider:ApiProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
    
    var room = this.navParams.get("room");
    this.apiProvider.getRoomById(room).subscribe(data => {
      console.log(data.data[0]['name']);
        this.roomName = data.data[0]['name'];
        this.roomDescription = data.data[0]['description'];
        this.roomImgPath = data.data[0]['img'];
        this.roomPath = data.data[0]['path'];

    })



  }
  displayPath(event,roomPath){
    let popover = this.popoverCtrl.create(PopoverPage,{roomPath:roomPath},{ cssClass: 'custom-popover'});
    popover.present({
      ev: event
    });
  }

}
