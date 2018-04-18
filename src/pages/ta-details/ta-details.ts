import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';
import { TeachingAssistant } from '../../entities/teachingAssistant';


@Component({
  selector: 'page-ta-details',
  templateUrl: 'ta-details.html',
})
export class TaDetailsPage {
	ta: TeachingAssistant;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {
  	this.ta = params.get('ta');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}