import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';
import { Lecturer } from '../../entities/lecturer';

import { LecturerProvider } from '../../providers/lecturer/lecturer';
import { ActionSheetController, AlertController, ToastController } from 'ionic-angular';




@Component({
  selector: 'page-admin-lecturer',
  templateUrl: 'admin-lecturer.html',
})
export class AdminLecturerPage {
	lecturer:Lecturer;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public lecturerProvider: LecturerProvider, public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
  	this.lecturer = params.get('lecturer');
  }

  showActionSheet()
  {
    let actionSheet = this.actionSheetCtrl.create(
    {
      title: 'Delete Lecturer' + this.lecturer.id,
      cssClass: 'action-sheets-basic-page',
      buttons: [  
    
        {
          text: 'Confirm',
          role: 'destructive',        
          handler: () => {
                this.lecturerProvider.deleteLecturer(this.lecturer.id).subscribe(
                  response => {
                    let toast = this.toastCtrl.create(
                    {
                      message: 'Lecturer deleted successfully',
                      cssClass: 'toast',
                      duration: 3000
                    });
                    
                    toast.present();
                    
                    this.navCtrl.pop();
                  },
                  error => {        
                    let toast = this.toastCtrl.create(
                    {
                      message: 'Error deleting lecturer',
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
