import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Lecturer } from '../../entities/lecturer';
import { StudentProvider } from '../../providers/student/student';
import { HomePage } from '../home/home';

/**
 * Generated class for the LecturerLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lecturer-login',
  templateUrl: 'lecturer-login.html',
})
export class LecturerLoginPage {
  fromPage: string;
  lecturer = {} as Lecturer;
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
    console.log('ionViewDidLoad LecturerLoginPage');
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
      this.studentProvider.getLecturer(this.username, this.password).subscribe(
        response => {         
          this.infoMessage = "Lecturer login successfully";
          this.isLogin = true;
          sessionStorage.setItem("username", this.username);   
          sessionStorage.setItem("isLogin", "true");
          sessionStorage.setItem("role", "lecturer");
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
