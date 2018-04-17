import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';

import { ModuleProvider } from '../../providers/module/module';

import { Student } from '../../entities/student';

import { Module } from '../../entities/module';

import { Lecturer } from '../../entities/lecturer';

import { TeachingAssistant } from '../../entities/teachingAssistant';

import { Announcement } from '../../entities/announcement';



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

  constructor(public navCtrl: NavController, public navParams: NavParams, public moduleProvider: ModuleProvider, public modalCtrl: ModalController) {
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

}



