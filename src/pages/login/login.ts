import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {
  fromPage: string;
	
	
	
	constructor(public navCtrl: NavController, public navParams: NavParams) 
	{
		this.fromPage = navParams.get('fromPage');
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
