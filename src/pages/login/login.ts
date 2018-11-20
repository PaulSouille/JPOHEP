import { ApiProvider } from './../../providers/api/api';
import { HomePage } from './../home/home';
import { CreateAccountPage } from './../create-account/create-account';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentialsForm: FormGroup;
  account : Account;

  constructor(public navCtrl: NavController,private events:Events, public navParams: NavParams,private alertCtrl:AlertController,private formBuilder: FormBuilder,private apiProvider: ApiProvider
    ) {
      this.credentialsForm = this.formBuilder.group({
        email: [''],
        password: [''],
      
      });
  }

  ionViewDidLoad() {
  }

  setAlert(titleAlert,contentAlert){
    let alert = this.alertCtrl.create({
      title: titleAlert,
      subTitle: contentAlert,
      buttons: ['Fermer']
    });
    alert.present();
  }
  onSignIn() {
    console.log(this.credentialsForm.controls['email'].value)
      this.apiProvider.login(this.credentialsForm.controls['email'].value,this.credentialsForm.controls['password'].value).subscribe(data => {
        console.log(data)
        if(data['error']=='ERROR_EMAIL'){
          this.setAlert('Attention','Email incorrect.')
        }
        else{
          if(data['error']=='ERROR_PASSWORD'){
            this.setAlert('Attention','Mot de passe incorrect')
          }
          else{
            if(data['error']=='SUCCESS'){
              localStorage.setItem("user_id", data.data.id);
              localStorage.setItem('role_id',data.data.role_id);
              this.events.publish('user:changed', localStorage.getItem('role_id')); 
              this.navCtrl.setRoot(HomePage);
            }
          }
        }
 
      });
    
    
  }

  onCreateAccount() {
    this.navCtrl.push(CreateAccountPage)
  }

}
