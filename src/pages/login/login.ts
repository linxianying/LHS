import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Student } from '../../entities/student';

import { RegisterPage } from '../register/register';

import { StudentProvider } from '../../providers/student/student';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {
  fromPage: string;
  student = {} as Student;
  submitted: boolean;
  isLogin: boolean;
  username: string;
  password: string;
	
	
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
      if((this.username == "student") && (this.password == "password"))
      {       
        
        this.isLogin = true;
        
        sessionStorage.setItem("username", this.username);   
        sessionStorage.setItem("isLogin", "true");
        
        this.studentProvider.setLoginCredential(this.username, this.password);
        
        let toast = this.toastCtrl.create(
        {
          message: 'Welcome back ' + this.username,
          duration: 3000
        });
        
        toast.present();
      }
      else
      {
        let alert = this.alertCtrl.create(
        {
          title: 'Login',
          subTitle: 'Invalid login credential',
          buttons: ['OK']
        });
        
        alert.present();      
      }
    }
    else
    {
    }
  }

}
