import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Lecturer } from '../../entities/lecturer';
import { Student } from '../../entities/student';
import { TeachingAssistant } from '../../entities/teachingAssistant';

/**
 * Generated class for the AdminUserManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin-user-management',
  templateUrl: 'admin-user-management.html',
})
export class AdminUserManagementPage {
  errorMessage: string;
  infoMessage: string;

  submitted: boolean;
  lecturers: Lecturer[];
  TAs: TeachingAssistant[];
  students: Student[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.submitted = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminUserManagementPage');
  }

}
