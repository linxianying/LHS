import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';
import { TeachingAssistant } from '../../entities/teachingAssistant';

import { TeachingAssistantProvider } from '../../providers/teaching-assistant/teaching-assistant';
import { ActionSheetController, AlertController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-admin-ta',
  templateUrl: 'admin-ta.html',
})
export class AdminTaPage {
	ta:TeachingAssistant;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public taProvider: TeachingAssistantProvider,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
  	this.ta = params.get('ta');
  }

  showActionSheet()
  {
    let actionSheet = this.actionSheetCtrl.create(
    {
      title: 'Delete TA' + this.ta.id,
      cssClass: 'action-sheets-basic-page',
      buttons: [  
    
        {
          text: 'Confirm',
          role: 'destructive',        
          handler: () => {
                this.taProvider.deleteTA(this.ta.id).subscribe(
                  response => {
                    let toast = this.toastCtrl.create(
                    {
                      message: 'TA deleted successfully',
                      cssClass: 'toast',
                      duration: 3000
                    });
                    
                    toast.present();
                    
                    this.navCtrl.pop();
                  },
                  error => {        
                    let toast = this.toastCtrl.create(
                    {
                      message: 'Error deleting ta',
                      cssClass: 'toast',
                      duration: 3000
                    });
                    
                    toast.present();
                  }
                );
                }
              
        },    
        {
          text: 'Cancel',
          role: 'cancel', 
          handler: () => {            
          }
        }
      ]
    });
    
    actionSheet.present();
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}