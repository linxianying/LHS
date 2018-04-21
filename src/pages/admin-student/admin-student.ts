import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';
import { Student } from '../../entities/student';


@Component({
  selector: 'page-admin-student',
  templateUrl: 'admin-student.html',
})
export class AdminStudentPage {
	student:Student;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {
  	this.student = params.get('student');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}