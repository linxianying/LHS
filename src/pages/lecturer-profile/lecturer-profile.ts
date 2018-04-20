import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController, AlertController } from 'ionic-angular';

import { LecturerProvider } from '../../providers/lecturer/lecturer';

import { Lecturer } from '../../entities/lecturer';
import { LogoutPage } from '../logout/logout';

@Component({
  selector: 'page-lecturer-profile',
  templateUrl: 'lecturer-profile.html',
})
export class LecturerProfilePage {

	username: string;
	lecturer: Lecturer;
	errorMessage: string;
  outStatus: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public lecturerProvider: LecturerProvider, public viewCtrl: ViewController) {
    this.outStatus=false; 
  	this.username=sessionStorage.getItem("username");
    console.error(this.username);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LecturerProfilePage');

    this.lecturerProvider.getCurrentLecturer(this.username).subscribe(
      response => {
        console.error("inside did load");
        this.lecturer = response.lecturer;  
        
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }


    updateLecturer(){
    console.log('update lecturer LecturerProfilePage');
    if(this.outStatus===true){
      console.error("evaluate to true");
      this.lecturer.isPremium=false;
      console.error(this.lecturer.isPremium);
    }
    this.lecturerProvider.updateLecturer(this.lecturer).subscribe(
      response => {
        console.error("inside update lecturer");
        window.alert('profile updated successfully!');
       
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
         window.alert('an error happened when update profile!');
      }
    );

    if(this.outStatus===true){
      this.navCtrl.push(LogoutPage, {fromPage: 'profile', isPremium: this.student.isPremium});
    }

  }

  dismiss() {
      this.viewCtrl.dismiss();
  }

}
