import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ModuleProvider } from '../../providers/module/module';

import { Module } from '../../entities/module';

/**
 * Generated class for the ModuleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-module-detail',
  templateUrl: 'module-detail.html',
})
export class ModuleDetailPage {
  errorMessage: string;
  module: Module;
  moduleId: number;
	

  constructor(public navCtrl: NavController, public navParams: NavParams, public moduleProvider: ModuleProvider) {
  	this.moduleId = JSON.parse(sessionStorage.getItem('moduleId'));

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModuleDetailPage');
    this.moduleProvider.getSpecificModule(this.moduleId).subscribe(
      response => {
        this.module = response.module;
        }, 
      error => {        
        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
      }
    );
  }

}
