import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ModuleProvider } from '../../providers/module/module';

import { Module } from '../../entities/module';
import { Announcement } from '../../entities/announcement';

@Component({
  selector: 'page-student-announcements',
  templateUrl: 'student-announcements.html',
})
export class StudentAnnouncementsPage {

	errorMessage: string;
	announcements: Announcement[];
	moduleId: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public moduleProvider: ModuleProvider) {
  	
  	this.moduleId = JSON.parse(sessionStorage.getItem('moduleId'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentAnnouncementsPage');

    this.moduleProvider.getAnnouncements(this.moduleId).subscribe(
			response => {
				this.announcements = response.announcements;
			},
			error => {				
				this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			}
		);
  }

}
