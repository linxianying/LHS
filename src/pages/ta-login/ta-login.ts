import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Student } from '../../entities/student';

import { RegisterPage } from '../register/register';

import { StudentProvider } from '../../providers/student/student';

import { TeachingAssistant } from '../../entities/teachingAssistant';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-ta-login',
  templateUrl: 'ta-login.html',
})
export class TaLoginPage {

  teachingAssistant = {} as TeachingAssistant;
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
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachingAssistantLoginPage');
    if(sessionStorage.getItem("isLogin") === "true")
    {
      this.isLogin = true;
    }
    
    this.username = sessionStorage.getItem("username");
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
      this.studentProvider.getTa(this.username, this.password).subscribe(
        response => {         
          this.infoMessage = "Teaching Assistant login successfully";
          this.isLogin = true;
          sessionStorage.setItem("username", this.username);   
          sessionStorage.setItem("isLogin", "true");
          sessionStorage.setItem("role", "ta");
          this.studentProvider.setLoginCredential(this.username, this.password);
          let toast = this.toastCtrl.create(
          {
            message: 'Welcome back ' + this.username,
            duration: 3000
          });
        
          toast.present();
          this.navCtrl.push(HomePage, {username: this.username});
        },
        error => {
          this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
          let alert = this.alertCtrl.create(
          {
            title: 'Login',
            subTitle: 'Invalid login credential',
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
