import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Student } from '../../entities/student';

import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {
  fromPage: string;
  student = {} as Student;  // an objecct as User
	
	
	
  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
	this.fromPage = navParams.get('fromPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
