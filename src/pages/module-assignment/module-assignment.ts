import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { ModuleProvider } from '../../providers/module/module';
import { Module } from '../../entities/module';
import { Lecturer } from '../../entities/lecturer';
import { Student } from '../../entities/student';
import { TeachingAssistant } from '../../entities/teachingAssistant';

/**
 * Generated class for the ModuleAssignmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-module-assignment',
  templateUrl: 'module-assignment.html',
})
export class ModuleAssignmentPage {

	moduleId:number;
	infoMessage: string;
	errorMessage: string;

	lecturers: Lecturer[];
	students: Student[];
	tas: TeachingAssistant[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public moduleProvider: ModuleProvider, public actionSheetCtrl: ActionSheetController,
        public alertCtrl: AlertController,
        public toastCtrl: ToastController) {
        this.moduleId = navParams.get('moduleId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModuleAssignmentPage');

    this.moduleProvider.getLecturers(this.moduleId).subscribe(
      response => {
        this.lecturers = response.lecturers;
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );

    this.moduleProvider.getTAs(this.moduleId).subscribe(
      response => {
        this.tas = response.tas;
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );

    this.moduleProvider.getStudents(this.moduleId).subscribe(
      response => {
        this.students = response.students;
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }

}
