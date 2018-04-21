import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController,ToastController } from 'ionic-angular';
import { ModuleProvider } from '../../providers/module/module';
import { Module } from '../../entities/module';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the CreateModulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-create-module',
  templateUrl: 'create-module.html',
})
export class CreateModulePage {

	errorMessage: string;
	infoMessage: string;
	submitted: boolean;
	newModule: Module;

  constructor(public navCtrl: NavController, public navParams: NavParams, public moduleProvider: ModuleProvider, public modalCtrl: ModalController,public toastCtrl: ToastController) {
  	this.submitted = false;
  	this.newModule = new Module();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateModulePage');
  }

   createModule()
	{		
		this.submitted = true;
		
		this.infoMessage = null;
		this.errorMessage = null;
			
			this.moduleProvider.createModule(this.newModule).subscribe(
				response => {					
					this.infoMessage = "New module " + response.Id + " created successfully";
					let toast = this.toastCtrl.create(
                    {
                      message: 'New module created successfully',
                      cssClass: 'toast',
                      duration: 3000
                    });
                    
                    toast.present();
                    
                    this.navCtrl.pop();
				},
				error => {
					this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
					let toast = this.toastCtrl.create(
                    {
                      message: 'Error creating module',
                      cssClass: 'toast',
                      duration: 3000
                    });
                    
                    toast.present();
				}

		)
	}

}
