import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';
import { Student } from '../../entities/student';

@Component({
  selector: 'page-student-details',
  templateUrl: 'student-details.html',
})


  export class StudentDetailsPage {
  student: Student;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.student = params.get('student');
    
    console.error('************ student 1: ' + this.student.name);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}


