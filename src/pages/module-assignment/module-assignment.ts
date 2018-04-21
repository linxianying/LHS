import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { ModuleProvider } from '../../providers/module/module';
import { LecturerProvider } from '../../providers/lecturer/lecturer';
import { StudentProvider } from '../../providers/student/student';
import { TeachingAssistantProvider } from '../../providers/teaching-assistant/teaching-assistant';
import { Module } from '../../entities/module';
import { Lecturer } from '../../entities/lecturer';
import { Student } from '../../entities/student';
import { TeachingAssistant } from '../../entities/teachingAssistant';

import { RegisterModulePage } from '../register-module/register-module';
import { RegisterModuleStudentPage } from '../register-module-student/register-module-student';
import { RegisterModuleTaPage } from '../register-module-ta/register-module-ta';

/**
 * Generated class for the ModuleAssignmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-module-assignment',
  templateUrl: 'module-assignment.html',
})
export class ModuleAssignmentPage {

	moduleId:number;
	infoMessage: string;
	errorMessage: string;

	lecturers: Lecturer[];
	students: Student[];
	tas: TeachingAssistant[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public moduleProvider: ModuleProvider, public lecturerProvider: LecturerProvider, public studentProvider: StudentProvider, public teachingAssistantProvider: TeachingAssistantProvider, public toastCtrl: ToastController) {
        this.moduleId = navParams.get('moduleId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModuleAssignmentPage');

    this.moduleProvider.getLecturers(this.moduleId).subscribe(
      response => {
        this.lecturers = response.lecturers;
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );

    this.moduleProvider.getTAs(this.moduleId).subscribe(
      response => {
        this.tas = response.tas;
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );

    this.moduleProvider.getClassAndGroups(this.moduleId).subscribe(
      response => {
        this.students = response.students;
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }

  ionViewWillEnter()
  {
    this.moduleProvider.getLecturers(this.moduleId).subscribe(
      response => {
        this.lecturers = response.lecturers;
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );

    this.moduleProvider.getTAs(this.moduleId).subscribe(
      response => {
        this.tas = response.tas;
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );

    this.moduleProvider.getClassAndGroups(this.moduleId).subscribe(
      response => {
        this.students = response.students;
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }

  removeLecturer(lecturer: Lecturer){
    this.lecturerProvider.dropModule(this.moduleId,lecturer.id).subscribe(
      response => {
        let toast = this.toastCtrl.create(
                    {
                      message: 'Lecturer remove successfully',
                      cssClass: 'toast',
                      duration: 3000
                    });
                    
                    toast.present();
                    
                    this.navCtrl.pop();
                  },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }

  removeTA(ta: TeachingAssistant){
    this.teachingAssistantProvider.dropModule(this.moduleId,ta.id).subscribe(
      response => {
        let toast = this.toastCtrl.create(
                    {
                      message: 'TA remove successfully',
                      cssClass: 'toast',
                      duration: 3000
                    });
                    
                    toast.present();
                    
                    this.navCtrl.pop();
                  },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
    }

  removeStudent(student: Student){
    this.studentProvider.dropModule(this.moduleId,student.id).subscribe(
      response => {
        let toast = this.toastCtrl.create(
                    {
                      message: 'Student remove successfully',
                      cssClass: 'toast',
                      duration: 3000
                    });
                    
                    toast.present();
                    
                    this.navCtrl.pop();
                  },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }

  registerModuleLecturer()
  { 
    this.navCtrl.push(RegisterModulePage, {'moduleId': this.moduleId});
  }

  registerModuleStudent()
  { 
    this.navCtrl.push(RegisterModuleStudentPage, {'moduleId': this.moduleId});
  }

  registerModuleTA()
  { 
    this.navCtrl.push(RegisterModuleTaPage, {'moduleId': this.moduleId});
  }

}
