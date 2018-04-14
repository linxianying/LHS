import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';

import { ModuleProvider } from '../../providers/module/module';

import { Lecturer } from '../../entities/lecturer';

import { Module } from '../../entities/module';

@Component({
  selector: 'page-student-facilitators',
  templateUrl: 'student-facilitators.html',
})
export class StudentFacilitatorsPage {

	errorMessage: string;
	lecturers: Lecturer[];
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
  }

  openModal(lecturer) {
    let modal = this.modalCtrl.create(LecturerDetailsPage, lecturer);
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
