import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ToastController, AlertController } from 'ionic-angular';

import { Student } from '../../entities/student';
import { StudentProvider } from '../../providers/student/student';
import { LogoutPage } from '../logout/logout';
import { PasswordPage } from '../password/password';

/**
 * Generated class for the StudentProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-student-profile',
  templateUrl: 'student-profile.html',
})
export class StudentProfilePage {
	username: string;
	student: Student;
  newTelephone: string;
  newEmail: string;
  outStatus: boolean;

	errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public studentProvider: StudentProvider, public viewCtrl: ViewController, toastCtrl: ToastController, alertCtrl: AlertController) {
    console.error("inside constructor");
    this.outStatus=false;
  	this.username=sessionStorage.getItem("username");
    console.error(this.username);


    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentProfilePage');
    this.studentProvider.getCurrentStudent(this.username).subscribe(
      response => {
        console.error("inside did load");
        this.student = response.student;
        
        
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }

  updatePassword(){
    this.navCtrl.push(PasswordPage, {oldPassword: this.student.password, id: this.student.id, role: 'student'});
  }

  updateStudent(){
    console.error(this.outStatus);
    if(this.outStatus===true){
      console.error("evaluate to true");
      this.student.isPremium=false;
      console.error(this.student.isPremium);
    }
    console.log('update student StudentProfilePage');
    console.error(this.student.telephone);
    console.error(this.student.email);
    this.studentProvider.updateStudent(this.student).subscribe(
      response => {
        console.error("inside update student");
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

  setTelephone(value){
    this.newTelephone=value;
    console.error(value);
  }
    
  dismiss() {
      this.viewCtrl.dismiss();
  }

   

}
