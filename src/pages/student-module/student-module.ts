import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public moduleProvider: ModuleProvider, public toastCtrl: ToastController,) {
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

		let toast = this.toastCtrl.create(
          {
            message: 'Welcome back ' + this.studentUsername,
            duration: 3000
          });
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
		console.error('*********** module: ' + module);
		sessionStorage.setItem('moduleId', module.id);
		this.navCtrl.push(StudentModuleDetailsPage);
		
	}




}
