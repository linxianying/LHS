import { Component } from '@angular/core';
import { ModalController, Platform, NavParams, ViewController, NavController } from 'ionic-angular';

import { Lecturer } from '../../entities/lecturer';
import { Student } from '../../entities/student';
import { TeachingAssistant } from '../../entities/teachingAssistant';

import { LecturerProvider } from '../../providers/lecturer/lecturer';
import { StudentProvider } from '../../providers/student/student';
import { TeachingAssistantProvider } from '../../providers/teaching-assistant/teaching-assistant';

import { AdminLecturerPage } from '../admin-lecturer/admin-lecturer';
import { AdminStudentPage } from '../admin-student/admin-student';
import { AdminTaPage } from '../admin-ta/admin-ta';

/**
 * Generated class for the AdminUserManagementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-admin-user-management',
  templateUrl: 'admin-user-management.html',
})
export class AdminUserManagementPage {
  errorMessage: string;
  infoMessage: string;

  submitted: boolean;
  lecturers: Lecturer[];
  TAs: TeachingAssistant[];
  students: Student[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public lecturerProvider: LecturerProvider, public teachingAssistantProvider: TeachingAssistantProvider, public studentProvider: StudentProvider) {
  	this.submitted = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminUserManagementPage');

    this.lecturerProvider.getAllLecturers().subscribe(
      response => {
        this.lecturers = response.lecturers;
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );

    this.teachingAssistantProvider.getAllTAs().subscribe(
      response => {
        this.TAs = response.tas;
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );

    this.studentProvider.getAllStudents().subscribe(
      response => {
        this.students = response.students;
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }

  ionViewWillEnter(){
  this.lecturerProvider.getAllLecturers().subscribe(
      response => {
        this.lecturers = response.lecturers;
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );

    this.teachingAssistantProvider.getAllTAs().subscribe(
      response => {
        this.TAs = response.tas;
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );

    this.studentProvider.getAllStudents().subscribe(
      response => {
        this.students = response.students;
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }

  viewLecturer(lecturer: Lecturer){
    this.navCtrl.push(AdminLecturerPage, {lecturer: lecturer});
  }

  viewStudent(student: Student){
    this.navCtrl.push(AdminStudentPage, {student: student});
  }

  viewTA(ta: TeachingAssistant){
    this.navCtrl.push(AdminTaPage, {ta: ta});
  }

}
