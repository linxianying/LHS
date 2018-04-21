import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';
import { Student } from '../../entities/student';

import { StudentProvider } from '../../providers/student/student';
import { ActionSheetController, AlertController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-admin-student',
  templateUrl: 'admin-student.html',
})
export class AdminStudentPage {
	student:Student;

  constructor(
    public navCtrl: NavController,
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public studentProvider: StudentProvider,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
  	this.student = params.get('student');
  }

  showActionSheet()
  {
    let actionSheet = this.actionSheetCtrl.create(
    {
      title: 'Delete Student' + this.student.id,
      cssClass: 'action-sheets-basic-page',
      buttons: [  
    
        {
          text: 'Confirm',
          role: 'destructive',        
          handler: () => {
                this.studentProvider.deleteStudent(this.student.id).subscribe(
                  response => {
                    let toast = this.toastCtrl.create(
                    {
                      message: 'Student deleted successfully',
                      cssClass: 'toast',
                      duration: 3000
                    });
                    
                    toast.present();
                    
                    this.navCtrl.pop();
                  },
                  error => {        
                    let toast = this.toastCtrl.create(
                    {
                      message: 'Error deleting student',
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