import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { ModuleProvider } from '../../providers/module/module';
import { LecturerProvider } from '../../providers/lecturer/lecturer';

import { Module } from '../../entities/module';
import { Lecturer } from '../../entities/lecturer';



@Component({
  selector: 'page-register-module',
  templateUrl: 'register-module.html',
})
export class RegisterModulePage {

	moduleId:number;
	infoMessage: string;
	errorMessage: string;

  lecturerToAssignId: number;
  studentToAssignId: number;
  taToAssignId: number;

  lecturers: Lecturer[];
  searchTerm: string='';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public lecturerProvider: LecturerProvider,public toastCtrl: ToastController) {
    this.moduleId = navParams.get('moduleId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterModulePage');

    this.lecturerProvider.getAllLecturers().subscribe(
      response => {
        this.lecturers = response.lecturers;
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  
  }

 setFilteredLecturers()
 {
    this.lecturers = this.lecturerProvider.filterLecturers(this.searchTerm);
 }

 

  registerModuleLecturer()
  { 

    this.lecturerProvider.assignModule(this.moduleId, this.lecturerToAssignId).subscribe(
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
