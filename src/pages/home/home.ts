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

  constructor(public navCtrl: NavController, 
				public navParams: NavParams) 
  {
		this.pages = [];
		
		this.pages.push({title: 'LoginPage', name: 'LoginPage'});
		this.pages.push({title: 'RegisterPage', name: 'RegisterPage'});
		
  }
  ionViewDidLoad() 
  {
	console.log('ionViewDidLoad home page');
  }

  pageTapped(event, page) 
  {	
	if(page.name == 'LoginPage')
	{
		this.navCtrl.push(LoginPage, {fromPage: 'HomePage'});
	}
	else if(page.name == 'RegisterPage')
	{
		this.navCtrl.push(RegisterPage, {fromPage: 'HomePage'});
	}
		
  }
}
