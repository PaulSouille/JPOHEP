import { ApiProvider } from './../../providers/api/api';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {
  credentialsForm: FormGroup;


  constructor(public navCtrl: NavController,private alertCtrl: AlertController, public navParams: NavParams,private formBuilder: FormBuilder,private apiProvider : ApiProvider){
    
  this.credentialsForm = this.formBuilder.group({
    email: [''],
    password: [''],
    phoneNumber:[],
    school:[''],
    firstName:[''],
    lastName:[''],
    passwordVerif:['']

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
onCreateAccount() {
  
    this.apiProvider.createAccount(this.credentialsForm.controls['email'].value,this.credentialsForm.controls['password'].value,this.credentialsForm.controls['phoneNumber'].value,this.credentialsForm.controls['school'].value,this.credentialsForm.controls['firstName'].value,this.credentialsForm.controls['lastName'].value).subscribe(data => {
      console.log(data)
      if(data['error']=='ERROR_ACCOUNT_EXIST'){
        this.setAlert('Attention','Cet email existe déjà.')
      }
      else{
        if(data['error']=='ERROR_ACCOUNT'){
          this.setAlert('Attention','Un problème est survenu.')
        }
        else{
          if(data['error']=='SUCCESS'){
            this.setAlert('Succès ! ','Le compte à été créé.')
            }
        }
      }

    });
  
  
}

}
