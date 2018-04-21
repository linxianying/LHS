import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ModuleProvider } from '../../providers/module/module';

import { Module } from '../../entities/module';

import { TaModuleDetailsPage } from '../ta-module-details/ta-module-details';
import { TaProfilePage } from '../ta-profile/ta-profile';

/**
 * Generated class for the TaModulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ta-module',
  templateUrl: 'ta-module.html',
})
export class TaModulePage {
	errorMessage: string;
	modules: Module[];
	taUsername: string;
	isLogin: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public moduleProvider: ModuleProvider) {
  	if(sessionStorage.getItem("isLogin")==="false")
		this.isLogin=false;
	else
		this.isLogin=true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaModulePage');

    this.taUsername = sessionStorage.getItem("username");

    this.moduleProvider.getFacilitatingModules(this.taUsername).subscribe(
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
		this.moduleProvider.getFacilitatingModules(this.taUsername).subscribe(
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
		this.navCtrl.push(TaModuleDetailsPage);
		
	}

	viewUserDetails(){
		this.navCtrl.push(TaProfilePage);
	}

	

}
