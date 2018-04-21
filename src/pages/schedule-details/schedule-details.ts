import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TimeEntryProvider } from '../../providers/time-entry/time-entry';

import { TimeEntry } from '../../entities/timeEntry';

@IonicPage()
@Component({
  selector: 'page-schedule-details',
  templateUrl: 'schedule-details.html',
})
export class ScheduleDetailsPage {
  errorMessage: string;
  timeEntry: TimeEntry;
  timeEntryId: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public timeEntryProvider: TimeEntryProvider) {
  	this.timeEntryId = JSON.parse(sessionStorage.getItem('timeEntryId'));
    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ScheduleDetailsPage');

    this.timeEntryProvider.retrieveTimeEntry(this.timeEntryId).subscribe(
      response => {
        this.timeEntry = response.timeEntry;

       console.error("*********** test " + response.timeEntry)},
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }

  updateTimeEntry(){
    console.log('update timeEntry ScheduleDetailsPage');
    console.error(this.timeEntry.title);
    console.error(this.timeEntry.details);
    this.timeEntryProvider.updateTimeEntry(this.timeEntry).subscribe(
      response => {
        console.error("inside update timeEntry");
        window.alert('timeEntry updated successfully!');
      },
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
         window.alert('an error happened when update timeEntry!');
      }
    );
  }
}
