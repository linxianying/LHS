import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';

import { ModuleProvider } from '../../providers/module/module';

import { Student } from '../../entities/student';

import { Module } from '../../entities/module';

@Component({
  selector: 'page-class-and-groups',
  templateUrl: 'template.html',
})
export class ClassAndGroupsPage {

	errorMessage: string;
	students: Student[];
	moduleId: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public moduleProvider: ModuleProvider, public modalCtrl: ModalController) {
    this.moduleId = JSON.parse(sessionStorage.getItem('moduleId'));
  }

  openModal(student) {

    let modal = this.modalCtrl.create(StudentDetailsPage, student);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassAndGroupsPage');
    this.moduleProvider.getClassAndGroups(this.moduleId).subscribe(
			response => {
				this.students = response.students;
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);
  }

  

}


export class StudentDetailsPage {
  student;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    
    this.student = this.params.get('student');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
