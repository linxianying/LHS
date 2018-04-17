import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';
import { Lecturer } from '../../entities/lecturer';


@Component({
  selector: 'page-lecturer-details',
  templateUrl: 'lecturer-details.html',
})
export class LecturerDetailsPage {
	lecturer:Lecturer

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {
  	this.lecturer = params.get('lecturer');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
