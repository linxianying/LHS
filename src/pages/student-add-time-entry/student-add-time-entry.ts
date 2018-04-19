import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Platform, ViewController } from 'ionic-angular';

import { TimeEntryProvider } from '../../providers/time-entry/time-entry';

import { TimeEntry } from '../../entities/timeEntry';
import { Student } from '../../entities/student';


@IonicPage()
@Component({
  selector: 'page-student-add-time-entry',
  templateUrl: 'student-add-time-entry.html',
})
export class StudentAddTimeEntryPage {
  infoMessage: string;
  errorMessage: string;
  timeEntry: TimeEntry;
  username: string;
  student: Student;
  role:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public timeEntryProvider: TimeEntryProvider) {
  	 this.timeEntry = new TimeEntry();
  	 this.username=sessionStorage.getItem('username');
     this.role="student";
  }

  createTimeEntry(){
    this.role="student";
    this.timeEntryProvider.createTimeEntry(this.timeEntry, this.username, this.role).subscribe(
      response => {           
        this.infoMessage = "New timeEntry " + response.id + " created successfully";
        this.errorMessage = null;
      },
      error => {        
        this.infoMessage = null;
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentAddTimeEntryPage');
  }

}
