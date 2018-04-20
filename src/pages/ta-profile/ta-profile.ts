import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController, AlertController } from 'ionic-angular';

import { TeachingAssistantProvider } from '../../providers/teaching-assistant/teaching-assistant';

import { TeachingAssistant } from '../../entities/teachingAssistant';
import { LogoutPage } from '../logout/logout';

@Component({
  selector: 'page-ta-profile',
  templateUrl: 'ta-profile.html',
})
export class TaProfilePage {

	username: string;
	ta: TeachingAssistant;
	errorMessage: string;
  outStatus: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public taProvider: TeachingAssistantProvider, public viewCtrl: ViewController) {
  	this.username=sessionStorage.getItem("username");
    this.outStatus=false;
    console.error(this.username);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaProfilePage');

    this.taProvider.getCurrentTA(this.username).subscribe(
      response => {
        console.error("inside did load");
        this.ta = response.ta;  
        
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }


  updateTA(){
    console.log('update TA TAProfilePage');
    if(this.outStatus===true){
      console.error("evaluate to true");
      this.ta.isPremium=false;
      console.error(this.ta.isPremium);
    }
    this.taProvider.updateTA(this.ta).subscribe(
      response => {
        console.error("inside update TA");
        window.alert('profile updated successfully!');
       
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
         window.alert('an error happened when update profile!');
      }
    );

    if(this.outStatus===true){
      this.navCtrl.push(LogoutPage, {fromPage: 'profile', isPremium: this.ta.isPremium});
    }

  }

  dismiss() {
      this.viewCtrl.dismiss();
  }

}
