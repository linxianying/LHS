import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { ModuleProvider } from '../../providers/module/module';

import { Module } from '../../entities/module';
import { ActionSheetController, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the UpdateModulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-update-module',
  templateUrl: 'update-module.html',
})
export class UpdateModulePage {
	errorMessage: string;
  	infoMessage: string
  	moduleToUpdate: Module;
  	moduleToUpdateId: number;
  	submitted: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public moduleProvider: ModuleProvider, public actionSheetCtrl: ActionSheetController,
        public alertCtrl: AlertController,
        public toastCtrl: ToastController) {
        this.moduleToUpdateId = navParams.get('moduleToUpdateId');
        this.submitted = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateModulePage');
  }

  update(updateModuleForm: NgForm)
	{		
		this.submitted = true;
		
		if (updateModuleForm.valid) 
		{	

			this.moduleProvider.updateModule(this.moduleToUpdate).subscribe(
				response => {					
					this.infoMessage = "Module updated successfully";
				},
				error => {
					this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
				}
			);
		}
		else
		{			
		}
	}

}
