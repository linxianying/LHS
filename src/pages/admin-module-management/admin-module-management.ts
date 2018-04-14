import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AdminProvider } from '../../providers/administrator/administrator';

import { Module } from '../../entities/module';


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
	newModule: Module;
	modules: List<Module>;
	moduleToUpdate: Module;
	moduleToAssign: Module;

	submitted: boolean;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.newModule = new Module();
  	this.modules = new List<>();
  	this.moduleToUpdate = new Module();
  	this.moduleToAssign = new Module();
  	this.submitted = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminModuleManagementPage');
  }

  clear()
  {
  		this.infoMessage = null;
		this.errorMessage = null;
		this.submitted = false;
		this.newModule = new Module();
  }

  create(createModuleForm: NgForm)
	{		
		this.submitted = true;
		
		this.infoMessage = null;
		this.errorMessage = null;
		
		if (createModuleForm.valid) 
		{		
			this.adminProvider.createModule(this.newModule).subscribe(
				response => {					
					this.infoMessage = "New module " + response.Id + " created successfully";
				},
				error => {
					this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
				}
			);
		}
	}

	update(updateModuleForm: NgForm)
	{		
		this.submitted = true;
		
		if (updateModuleForm.valid) 
		{		
			this.adminProvider.updateModule(this.moduleToUpdate).subscribe(
				response => {					
					this.infoMessage = "Module updated successfully";
				},
				error => {
					this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
				}
			);
		}
		
	}
}
