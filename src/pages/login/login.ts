import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Student } from '../../entities/student';

import { RegisterPage } from '../register/register';

import { StudentProvider } from '../../providers/student/student';

import { StudentProfilePage } from '../student-profile/student-profile';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {
  fromPage: string;
  student : Student;
  submitted: boolean;
  isLogin: boolean;
  username: string;
  password: string;
  errorMessage: string;
  infoMessage: string;
	
	
	constructor(public navCtrl: NavController,
        public alertCtrl: AlertController,
        public toastCtrl: ToastController,
        public navParams: NavParams,
        public studentProvider: StudentProvider)
  {
    this.submitted = false;
    this.isLogin = false;
    this.fromPage = navParams.get('fromPage');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    if(sessionStorage.getItem("isLogin") === "true")
    {
      this.isLogin = true;
    }
    
    this.username = sessionStorage.getItem("username");
  }

  viewUserDetails(){
    this.navCtrl.push(StudentProfilePage);
  }

  clear()
  {
    this.username = "";
    this.password = "";
  }

  login(loginForm: NgForm)
  {
    this.submitted = true;
    
    if (loginForm.valid) 
    {
      this.studentProvider.getStudent(this.username, this.password).subscribe(
        response => {         
          this.infoMessage = "Student login successfully";
          this.isLogin = true;
          this.student=response.student;
          sessionStorage.setItem("username", this.username);   
          sessionStorage.setItem("isLogin", "true");
          sessionStorage.setItem("role", "student");
          this.studentProvider.setLoginCredential(this.username, this.password);
          let toast = this.toastCtrl.create(
          {
            message: 'Welcome back ' + this.username,
            duration: 3000
          });
        
          toast.present();
        },
        error => {
          this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
          let alert = this.alertCtrl.create(
          {
            title: 'Login',
            subTitle: 'Invalid login credential' + error.status,
            buttons: ['OK']
          });
          
          alert.present(); 
          });
      
      
    }
    else
    {
    }
  }

}
