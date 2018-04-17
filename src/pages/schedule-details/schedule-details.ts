import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TimeEntryProvider } from '../../providers/time-entry/time-entry';

import { TimeEntry } from '../../entities/timeEntry';
/**
 * Generated class for the ScheduleDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

}
