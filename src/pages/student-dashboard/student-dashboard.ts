import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NgForm } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Student } from '../../entities/student';

import { StudentProvider } from '../../providers/student/student';
@Component({
  selector: 'page-student-dashboard',
  templateUrl: 'student-dashboard.html',
})
export class StudentDashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentDashboardPage');
  }

}
