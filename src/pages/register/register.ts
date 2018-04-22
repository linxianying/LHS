import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Student } from '../../entities/student';
import { LoginPage } from '../login/login';
import { StudentProvider } from '../../providers/student/student';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  fromPage: string;
  infoMessage: string;
  errorMessage: string;
  student: Student;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
          public studentProvider: StudentProvider) {
    this.fromPage = navParams.get('fromPage');
    this.student = new Student();
  }

  loginStudent(){
    this.navCtrl.push(LoginPage);
  }



  createStudent()
  {
    this.studentProvider.createStudent(this.student).subscribe(
      response => {           
        this.infoMessage = "New student " + response.id + " created successfully";
        window.alert('New student created successfully!');
        this.errorMessage = null;
      },
      error => {        
        this.infoMessage = null;
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter RegisterPage');
  }

}
