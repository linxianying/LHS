import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Platform, ViewController } from 'ionic-angular';

import { TimeEntryProvider } from '../../providers/time-entry/time-entry';
import { LecturerProvider } from '../../providers/lecturer/lecturer';

import { TimeEntry } from '../../entities/timeEntry';
import { Lecturer } from '../../entities/lecturer';




@IonicPage()
@Component({
  selector: 'page-lecturer-add-time-entry',
  templateUrl: 'lecturer-add-time-entry.html',
})
export class LecturerAddTimeEntryPage {
  infoMessage: string;
  errorMessage: string;
  timeEntry: TimeEntry;
  username: string;
  lecturer: Lecturer;
  role:string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public timeEntryProvider: TimeEntryProvider) {
  	 this.timeEntry = new TimeEntry();
  	 this.username=sessionStorage.getItem('username');
  	 this.role="lecturer";
  }

  createTimeEntry(){
    this.role="lecturer";
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
