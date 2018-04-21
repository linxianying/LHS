import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController, AlertController } from 'ionic-angular';

import { Administrator } from '../../entities/administrator';
import { AdministratorProvider } from '../../providers/administrator/administrator';
import { LogoutPage } from '../logout/logout';
import { PasswordPage } from '../password/password';

/**
 * Generated class for the AdminProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin-profile',
  templateUrl: 'admin-profile.html',
})
export class AdminProfilePage {
  username: string;
  admin: Administrator;
  newTelephone: string;
  newEmail: string;
  outStatus: boolean;

  errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public adminProvider: AdministratorProvider, public viewCtrl: ViewController, toastCtrl: ToastController, alertCtrl: AlertController) {
  	console.error("inside constructor");
    this.outStatus=false;
  	this.username=sessionStorage.getItem("username");
    console.error(this.username);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminProfilePage');

    this.adminProvider.getCurrentAdmin(this.username).subscribe(
      response => {
        console.error("inside did load");
        this.admin = response.admin;
        
        
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }

  updatePassword(){
    this.navCtrl.push(PasswordPage, {oldPassword: this.admin.password, id: this.admin.id, role: 'admin'});
  }


  updateAdmin(){
    console.error(this.outStatus);
    if(this.outStatus===true){
      console.error("evaluate to true");
      this.admin.isPremium=false;
      console.error(this.admin.isPremium);
    }
    console.log('update admin adminProfilePage');
    console.error(this.admin.telephone);
    console.error(this.admin.email);
    this.adminProvider.updateAdmin(this.admin).subscribe(
      response => {
        console.error("inside update admin");
        window.alert('profile updated successfully!');
        

        
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
         window.alert('an error happened when update profile!');
      }
    );

    if(this.outStatus===true){
      this.navCtrl.push(LogoutPage, {fromPage: 'profile', isPremium: this.admin.isPremium});
    }

  }

  dismiss() {
      this.viewCtrl.dismiss();
  }


}
