import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ModuleProvider } from '../../providers/module/module';

import { Module } from '../../entities/module';

import { StudentModuleDetailsPage } from '../student-module-details/student-module-details';

@Component({
  selector: 'page-student-module',
  templateUrl: 'student-module.html',
})
export class StudentModulePage {

	errorMessage: string;
	modules: Module[];
	studentUsername: string;
	isLogin: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public moduleProvider: ModuleProvider) {
  	if(sessionStorage.getItem("isLogin")==="false")
		this.isLogin=false;
	else
		this.isLogin=true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentModulePage');
    
    this.studentUsername = sessionStorage.getItem("username");

    this.moduleProvider.getEnrolledModules(this.studentUsername).subscribe(
			response => {
				this.modules = response.modules;
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);
  }


  ionViewWillEnter()
	{
		this.moduleProvider.getEnrolledModules(this.studentUsername).subscribe(
			response => {
				this.modules = response.modules;
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);
	}


	viewModuleDetails(event, module) 
	{
		sessionStorage.setItem('moduleId', module.id);
		this.navCtrl.push(StudentModuleDetailsPage);
		
	}




}
