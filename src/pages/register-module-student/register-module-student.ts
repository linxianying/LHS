import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { StudentProvider } from '../../providers/student/student';

import { Module } from '../../entities/module';

/**
 * Generated class for the RegisterModuleStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register-module-student',
  templateUrl: 'register-module-student.html',
})
export class RegisterModuleStudentPage {

	moduleId:number;
	infoMessage: string;
	errorMessage: string;

  lecturerToAssignId: number;
  studentToAssignId: number;
  taToAssignId: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,public studentProvider: StudentProvider) {
  this.moduleId = navParams.get('moduleId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterModuleStudentPage');
  }

  registerModuleStudent()
  { 

    this.studentProvider.assignModule(this.moduleId, this.studentToAssignId).subscribe(
      response => {           
        this.infoMessage = "Module " + response.id + " registered successfully";
        this.errorMessage = null;
      },
      error => {        
        this.infoMessage = null;
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }

}
