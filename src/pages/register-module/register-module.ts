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

  lecturerToAssignId: number;
  studentToAssignId: number;
  taToAssignId: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public lecturerProvider: LecturerProvider) {
    this.moduleId = navParams.get('moduleId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterModulePage');
  }

  registerModuleLecturer()
  { 

    this.lecturerProvider.assignModule(this.moduleId, this.lecturerToAssignId).subscribe(
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
