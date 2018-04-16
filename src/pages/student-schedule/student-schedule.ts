import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TimeEntryProvider } from '../../providers/time-entry/time-entry';

import { TimeEntry } from '../../entities/timeEntry';


@Component({
  selector: 'page-student-schedule',
  templateUrl: 'student-schedule.html',
})
export class StudentSchedulePage {
	errorMessage: string;
	timeEntries: TimeEntry[];
	studentUsername: string;

  constructor(public navCtrl: NavController, 
	public navParams: NavParams, 
	public timeEntryProvider: TimeEntryProvider) {
  }

  ionViewWillEnter()
	{
		this.timeEntryProvider.getEnrolledTimeEntry(this.studentUsername).subscribe(
			response => {
				this.timeEntries = response.timeEntrys;
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);
	}



  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentSchedulePage');
    
    this.studentUsername = sessionStorage.getItem("username");

    this.timeEntryProvider.getEnrolledTimeEntry(this.studentUsername).subscribe(
			response => {
				this.timeEntries = response.timeEntrys;
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);
  }

}
