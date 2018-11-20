import { AdminPage } from './../pages/admin/admin';
import { QrCodePage } from './../pages/qr-code/qr-code';
import { BookingPage } from './../pages/booking/booking';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from './../pages/login/login';
import { HomePage } from '../pages/home/home';
import { DisplayBookingPage } from '../pages/display-booking/display-booking';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any =LoginPage;
  user_id:string = "1";
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,private events:Events, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

      this.pages = [
        { title: 'Accueil', component: HomePage },
        { title: 'Scanner un code', component: QrCodePage },
        { title:'Réserver',component : BookingPage},
        {title:"Mes réservations",component:DisplayBookingPage}
      ];


      this.events.subscribe('user:changed', user_id => {
        this.user_id = user_id; 
        if(this.user_id == "0"){
          this.pages = [
            { title: 'Accueil', component: HomePage },
            { title: 'Scanner un code', component: QrCodePage },
            { title:'Réserver',component : BookingPage},
            {title:"Mes réservations",component:DisplayBookingPage}
          ];
        }
        else{
          this.pages = [
            { title: 'Accueil', component: HomePage },
            { title: 'Scanner un code', component: QrCodePage },
            { title:'Réserver',component : BookingPage},
            {title:"Mes réservations",component:DisplayBookingPage},
            {title:"Administration",component:AdminPage}
          ];
        }

     });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}