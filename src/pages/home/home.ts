import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pages: Array<{title: string, name: string}>;
  isLogin:boolean;

  constructor(public navCtrl: NavController, 
				public navParams: NavParams) 
  {
		this.pages = [];
		if(sessionStorage.getItem("isLogin") === "true")
	    {
	      this.isLogin = true;
	    }else{
	      this.isLogin = false;
	    }
		
		this.pages.push({title: 'LoginPage', name: 'LoginPage'});
		this.pages.push({title: 'RegisterPage', name: 'RegisterPage'});
		
  }
  ionViewDidLoad() 
  {
	console.log('ionViewDidLoad home page');
	
  }
}