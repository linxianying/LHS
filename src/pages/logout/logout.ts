import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Student } from '../../entities/student';

import { RegisterPage } from '../register/register';

import { StudentProvider } from '../../providers/student/student';
@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  isLogin: boolean;
  username: string;
  password: string;
  isPremium: boolean;
  fromPage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
	  this.isLogin = false;
    this.password = "";
	  this.username = "";
    this.fromPage = navParams.get('fromPage');
    this.isPremium = navParams.get('isPremium');
    console.error(this.fromPage);
    console.error(this.isPremium);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
    this.username = "";
    this.password = "";
    this.isLogin = false;
    sessionStorage.setItem('username', this.username);
    sessionStorage.setItem('isLogin', "false");
  }

}
