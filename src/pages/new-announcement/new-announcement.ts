import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Module } from '../../entities/module';

import { Lecturer } from '../../entities/lecturer';

import { Announcement } from '../../entities/announcement';

import { LecturerProvider } from '../../providers/lecturer/lecturer';

import { Platform, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-new-announcement',
  templateUrl: 'new-announcement.html',
})
export class NewAnnouncementPage {
	
	module: Module;
	announcement: Announcement;
	infoMessage: string;
	errorMessage: string;
	lecturerUsername: string;


  constructor(public navCtrl: NavController,
    public platform: Platform,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public lecturerProvider: LecturerProvider) {
  	this.module = navParams.get('module');
  	this.announcement = new Announcement();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewAnnouncementPage');
    //this.lecturerUsername = sessionStorage.getItem("username");
    this.lecturerUsername="lecturer1";
    console.error(this.lecturerUsername);
  }


  createAnnouncement()
  {
    this.lecturerProvider.createAnnouncement(this.announcement, this.module.id, this.lecturerUsername).subscribe(
      response => {           
        this.infoMessage = "New announcement " + response.id + " created successfully";
        this.errorMessage = null;
      },
      error => {        
        this.infoMessage = null;
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
