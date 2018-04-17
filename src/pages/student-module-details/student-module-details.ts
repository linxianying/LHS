import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';

import { ModuleProvider } from '../../providers/module/module';

import { Student } from '../../entities/student';

import { AlertController } from 'ionic-angular';

import { Module } from '../../entities/module';

import { Lecturer } from '../../entities/lecturer';

import { TeachingAssistant } from '../../entities/teachingAssistant';

import { Announcement } from '../../entities/announcement';

import { StudentDetailsPage } from '../student-details/student-details';

import { LecturerDetailsPage } from '../lecturer-details/lecturer-details';

import { TaDetailsPage } from '../ta-details/ta-details';



@Component({
  selector: 'page-student-module-details',
  templateUrl: 'student-module-details.html',
})

export class StudentModuleDetailsPage {

	errorMessage: string;
	module: Module;
  moduleId: number;
  students: Student[];
  lecturers: Lecturer[];
  tas: TeachingAssistant[];
  announcements: Announcement[];

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams, public moduleProvider: ModuleProvider, public modalCtrl: ModalController) {
  	this.moduleId = JSON.parse(sessionStorage.getItem('moduleId'));
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentModuleDetailsPage');

    this.moduleProvider.getSpecificModule(this.moduleId).subscribe(
      response => {
        this.module = response.module;
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

    this.moduleProvider.getAnnouncements(this.moduleId).subscribe(
      response => {
        this.announcements = response.announcements;
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );

  }


  viewStudentDetails(student) 
  {
    this.navCtrl.push(StudentDetailsPage, {student: student});
    
  }

  viewLecturerDetails(lecturer) 
  {
    this.navCtrl.push(LecturerDetailsPage, {lecturer: lecturer});
    
  }
    viewTaDetails(ta) 
  {
    this.navCtrl.push(TaDetailsPage, {ta: ta});
    
  }
}



