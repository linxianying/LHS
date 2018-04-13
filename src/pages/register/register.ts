import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  fromPage: string;

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams) {
    this.fromPage = navParams.get('fromPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
