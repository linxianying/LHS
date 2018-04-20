import { Component } from '@angular/core';

import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';

import { ModuleProvider } from '../../providers/module/module';
import { Module } from '../../entities/module';

import { ModuleDetailPage } from '../module-detail/module-detail';
import { CreateModulePage } from '../create-module/create-module';


/**
 * Generated class for the AdminModuleManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin-module-management',
  templateUrl: 'admin-module-management.html',
})
export class AdminModuleManagementPage {

	errorMessage: string;
	infoMessage: string;

	submitted: boolean;
	modules: Module[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public moduleProvider: ModuleProvider, public modalCtrl: ModalController) {
  
  	this.submitted = false;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminModuleManagementPage');


    this.moduleProvider.getModules().subscribe(
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
    this.moduleProvider.getModules().subscribe(
      response => {
        this.modules = response.modules;
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }

  clear()
  {
  	this.infoMessage = null;
		this.errorMessage = null;
		this.submitted = false;
  }

 	create(){
    this.navCtrl.push(CreateModulePage);
 	}

 	viewModule(module:Module){
 		this.navCtrl.push(ModuleDetailPage, {moduleId: module.id});
 	}

	

  }



