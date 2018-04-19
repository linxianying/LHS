import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ModuleProvider } from '../../providers/module/module';

import { Module } from '../../entities/module';

import { LecturerModuleDetailsPage } from '../lecturer-module-details/lecturer-module-details';

@Component({
  selector: 'page-lecturer-module',
  templateUrl: 'lecturer-module.html',
})
export class LecturerModulePage {

	errorMessage: string;
	modules: Module[];
	lecturerUsername: string;
	isLogin: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public moduleProvider: ModuleProvider) {
  	if(sessionStorage.getItem("isLogin")==="false")
		this.isLogin=false;
	else
		this.isLogin=true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LecturerModulePage');

    this.lecturerUsername = sessionStorage.getItem("username");

    this.moduleProvider.getTeachingModules(this.lecturerUsername).subscribe(
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
		this.moduleProvider.getTeachingModules(this.lecturerUsername).subscribe(
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
		this.navCtrl.push(LecturerModuleDetailsPage);
		
	}

}
