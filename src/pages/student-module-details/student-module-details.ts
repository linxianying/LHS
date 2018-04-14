import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ModuleProvider } from '../../providers/module/module';

import { Module } from '../../entities/module';


@Component({
  selector: 'page-student-module-details',
  templateUrl: 'student-module-details.html',
})

export class StudentModuleDetailsPage {

	errorMessage: string;
	module: Module;
  moduleId: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public moduleProvider: ModuleProvider) {
  	this.moduleId = JSON.parse(sessionStorage.getItem('moduleId'));

    this.moduleProvider.getSpecificModule(this.moduleId).subscribe(
      response => {
        this.module = response.module;
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentModuleDetailsPage');
  }

}
