import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Platform } from 'ionic-angular';

/*
  Generated class for the AdministratorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AdministratorProvider {

	ipAddress = '172.31.69.217';
	portNo = '8080';
	fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/LearningHubSystem-rest/webresources/administrator';
	
	baseUrl = "/api/administrator";
	
	username = "";
	password = "";
	loginCredential = "";


  constructor(public httpClient: HttpClient,public platform: Platform) {
    console.log('Hello AdministratorProvider Provider');
  }

  

}
