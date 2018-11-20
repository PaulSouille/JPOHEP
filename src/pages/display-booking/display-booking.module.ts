import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DisplayBookingPage } from './display-booking';

@NgModule({
  declarations: [
    DisplayBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(DisplayBookingPage),
  ],
})
export class DisplayBookingPageModule {}
