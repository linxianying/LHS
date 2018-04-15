import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';

import { ModuleProvider } from '../../providers/module/module';

import { Lecturer } from '../../entities/lecturer';

import { TeachingAssistant } from '../../entities/teachingAssistant';

import { Module } from '../../entities/module';

@Component({
  selector: 'page-student-facilitators',
  templateUrl: 'student-facilitators.html',
})
export class StudentFacilitatorsPage {

	errorMessage: string;
	lecturers: Lecturer[];
  tas: TeachingAssistant[];
	moduleId: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public moduleProvider: ModuleProvider, public modalCtrl: ModalController) {
  	this.moduleId = JSON.parse(sessionStorage.getItem('moduleId'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentFacilitatorsPage');
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
  }

  openModalLecturer(lecturer) {
    let modal = this.modalCtrl.create(LecturerDetailsPage, lecturer);
    modal.present();
  }

  openModalTA(ta) {
    let modal = this.modalCtrl.create(TaDetailsPage, ta);
    modal.present();
  }
}


export class LecturerDetailsPage {
  lecturer;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    
    this.lecturer = this.params.get('lecturer');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}

export class TaDetailsPage {
  ta;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    
    this.ta = this.params.get('ta');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}