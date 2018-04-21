import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { ModuleProvider } from '../../providers/module/module';

import { Module } from '../../entities/module';
import { ActionSheetController, AlertController, ToastController } from 'ionic-angular';

import { UpdateModulePage } from '../update-module/update-module';
import { ModuleAssignmentPage } from '../module-assignment/module-assignment';


/**
 * Generated class for the ModuleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-module-detail',
  templateUrl: 'module-detail.html',
})
export class ModuleDetailPage {
  errorMessage: string;
  infoMessage: string
  module: Module;
  moduleId: number;
	

  constructor(public navCtrl: NavController, public navParams: NavParams, public moduleProvider: ModuleProvider, public actionSheetCtrl: ActionSheetController,
        public alertCtrl: AlertController,
        public toastCtrl: ToastController) {
  	this.moduleId = navParams.get('moduleId');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModuleDetailPage');
    this.moduleProvider.getSpecificModule(this.moduleId).subscribe(
      response => {
        this.module = response.module;
        this.infoMessage = "Module loaded."
        }, 
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }

  ionViewWillEnter()
  {
    this.moduleProvider.getSpecificModule(this.moduleId).subscribe(
      response => {
        this.module = response.module;
        this.infoMessage = "Module loaded.";               
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }

  showActionSheet()
  {
    let actionSheet = this.actionSheetCtrl.create(
    {
      title: 'Module' + this.module.moduleCode,
      cssClass: 'action-sheets-basic-page',
      buttons: [  
        {
          text: 'Update',       
          handler: () => {
            this.navCtrl.push(UpdateModulePage, {'moduleToUpdateId': this.moduleId});
          }
        },
        { 
          text: 'Facilitators',
          handler:() => {
            this.navCtrl.push(ModuleAssignmentPage,{'moduleId': this.moduleId});
          }
        },    
        {
          text: 'Delete',
          role: 'destructive',        
          handler: () => {
            let confirm = this.alertCtrl.create({
              title: 'Confirm Delete',
              message: 'Do you want to delete this module?',
              buttons: [
              {
                text: 'No',
                handler: () => {
                }
              },
              {
                text: 'Yes',
                handler: () => {
                this.moduleProvider.deleteModule(this.moduleId).subscribe(
                  response => {
                    let toast = this.toastCtrl.create(
                    {
                      message: 'Module deleted successfully',
                      cssClass: 'toast',
                      duration: 3000
                    });
                    
                    toast.present();
                    
                    this.navCtrl.pop();
                  },
                  error => {        
                    let toast = this.toastCtrl.create(
                    {
                      message: 'Error deleting module',
                      cssClass: 'toast',
                      duration: 3000
                    });
                    
                    toast.present();
                  }
                );
                }
              }
              ]
            });
            confirm.present();
          }
        },    
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          handler: () => {            
          }
        }
      ]
    });
    
    actionSheet.present();
  }

}
