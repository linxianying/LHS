import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TimeEntryProvider } from '../../providers/time-entry/time-entry';
import { TimeEntry } from '../../entities/timeEntry';
import { ScheduleDetailsPage } from '../schedule-details/schedule-details';
import { LecturerAddTimeEntryPage } from '../lecturer-add-time-entry/lecturer-add-time-entry';

@Component({
  selector: 'page-lecturer-schedule',
  templateUrl: 'lecturer-schedule.html',
})
export class LecturerSchedulePage {

    errorMessage: string;
	timeEntries: TimeEntry[];
	lecturerUsername: string;
	lecturerAddTimeEntryPage:any;
	isLogin:boolean;


  constructor(public navCtrl: NavController, 
	public navParams: NavParams, 
	public timeEntryProvider: TimeEntryProvider) {
	this.lecturerAddTimeEntryPage=LecturerAddTimeEntryPage;
	if(sessionStorage.getItem("isLogin")==="false")
		this.isLogin=false;
	else
		this.isLogin=true;
  }

    ionViewWillEnter()
	{
		this.timeEntryProvider.getLecturerEnrolledTimeEntry(this.lecturerUsername).subscribe(
			response => {
				this.timeEntries = response.timeEntrys;
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);
	}

	viewTimeEntryDetails(event, timeEntry) 
	{
		this.navCtrl.push(ScheduleDetailsPage, {'timeEntryToViewId': timeEntry.id});
		sessionStorage.setItem('timeEntryId', timeEntry.id);
	}

  newTimeEntry(){
  	this.navCtrl.push(LecturerAddTimeEntryPage, {username: this.lecturerUsername});
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LecturerSchedulePage');
    
    this.lecturerUsername = sessionStorage.getItem("username");

    this.timeEntryProvider.getLecturerEnrolledTimeEntry(this.lecturerUsername).subscribe(
			response => {
				this.timeEntries = response.timeEntrys;
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);
  }

}
