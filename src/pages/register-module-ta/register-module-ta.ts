import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { TeachingAssistantProvider } from '../../providers/teaching-assistant/teaching-assistant';
import { Module } from '../../entities/module';
/**
 * Generated class for the RegisterModuleTaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register-module-ta',
  templateUrl: 'register-module-ta.html',
})
export class RegisterModuleTaPage {

	moduleId:number;
	infoMessage: string;
	errorMessage: string;

  lecturerToAssignId: number;
  studentToAssignId: number;
  taToAssignId: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public taProvider:TeachingAssistantProvider,) {
  this.moduleId = navParams.get('moduleId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterModuleTaPage');
  }

  registerModuleTA()
  { 

    this.taProvider.assignModule(this.moduleId, this.taToAssignId).subscribe(
      response => {           
        this.infoMessage = "Module " + response.id + " registered successfully";
        this.errorMessage = null;
      },
      error => {        
        this.infoMessage = null;
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }

}
