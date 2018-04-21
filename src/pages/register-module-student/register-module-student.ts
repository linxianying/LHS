import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { StudentProvider } from '../../providers/student/student';

import { Module } from '../../entities/module';

/**
 * Generated class for the RegisterModuleStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register-module-student',
  templateUrl: 'register-module-student.html',
})
export class RegisterModuleStudentPage {

	moduleId:number;
	infoMessage: string;
	errorMessage: string;

  lecturerToAssignId: number;
  studentToAssignId: number;
  taToAssignId: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public studentProvider: StudentProvider,public toastCtrl: ToastController) {
  this.moduleId = navParams.get('moduleId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterModuleStudentPage');
  }

  registerModuleStudent()
  { 

    this.studentProvider.assignModule(this.moduleId, this.studentToAssignId).subscribe(
      response => {           
  
        this.errorMessage = null;

        let toast = this.toastCtrl.create(
                    {
                      message: 'Module registered successfully',
                      cssClass: 'toast',
                      duration: 3000
                    });
                    
                    toast.present();
                    
                    this.navCtrl.pop();
      },
      error => {        
        this.infoMessage = null;
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;

        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
          let toast = this.toastCtrl.create(
                    {
                      message: 'Error register module',
                      cssClass: 'toast',
                      duration: 3000
                    });
                    
                    toast.present();
      }
      
    );
  }

}
