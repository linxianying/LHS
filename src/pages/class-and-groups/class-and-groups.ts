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
	module: Module;

  constructor(public navCtrl: NavController, public navParams: NavParams, public moduleProvider: ModuleProvider, public modalCtrl: ModalController) {
  }

  openModal(student) {

    let modal = this.modalCtrl.create(StudentDetailsPage, student);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassAndGroupsPage');

    this.moduleProvider.getClassAndGroups(this.module.id).subscribe(
			response => {
				this.students = response.students;
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);
  }

  @Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Student Details
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
     
      <ion-item>
        Student Name
        <ion-note item-end>
          {{student.name}}
        </ion-note>
      </ion-item>

      <ion-item>
        Student Department
        <ion-note item-end>
          {{student.department}}
        </ion-note>
      </ion-item>

      <ion-item>
        Student Faculty
        <ion-note item-end>
          {{student.faculty}}
        </ion-note>
      </ion-item>

      <ion-item>
        Student Telephone
        <ion-note item-end>
          {{student.telephone}}
        </ion-note>
      </ion-item>

      <ion-item>
        Student Email
        <ion-note item-end>
          {{student.telephone}}
        </ion-note>
      </ion-item>
      
  </ion-list>
</ion-content>
`
})

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
