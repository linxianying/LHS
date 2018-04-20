import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { ModuleProvider } from '../../providers/module/module';
import { LecturerProvider } from '../../providers/lecturer/lecturer';
import { Module } from '../../entities/module';
import { Lecturer } from '../../entities/lecturer';



@Component({
  selector: 'page-register-module',
  templateUrl: 'register-module.html',
})
export class RegisterModulePage {

	moduleId:number;
	infoMessage: string;
	errorMessage: string;

	lecturerToAssign: Lecturer;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public lecturerProvider: LecturerProvider) {
    this.moduleId = navParams.get('moduleId');
    this.lecturerToAssign = new Lecturer();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterModulePage');
  }

  registerModule(lecturerId: number)
  { 
    this.lecturerProvider.getSpecificLecturer(lecturerId).subscribe(
      response => {           
        this.lecturerToAssign = response.lecturer;
      },
      error => {        
        this.infoMessage = null;
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );

    this.lecturerProvider.assignModule(this.moduleId, this.lecturerToAssign).subscribe(
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
