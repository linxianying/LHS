import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';
import { Lecturer } from '../../entities/lecturer';

import { LecturerProvider } from '../../providers/lecturer/lecturer';
import { ActionSheetController, AlertController, ToastController } from 'ionic-angular';

import { UpdateLecturerPage } from '../update-lecturer/update-lecturer';


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
      title: 'Lecturer' + this.lecturer.id,
      cssClass: 'action-sheets-basic-page',
      buttons: [  
        {
          text: 'Update',       
          handler: () => {
            this.navCtrl.push(UpdateLecturerPage);
          }
        },
    
        {
          text: 'Delete',
          role: 'destructive',        
          handler: () => {
            let confirm = this.alertCtrl.create({
              title: 'Confirm Delete',
              message: 'Do you want to delete this lecturer account?',
              buttons: [
              {
                text: 'No',
                handler: () => {
                }
              },
              {
                text: 'Yes',
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

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
