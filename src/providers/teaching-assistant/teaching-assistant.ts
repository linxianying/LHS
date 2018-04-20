import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Platform } from 'ionic-angular';


import { Lecturer} from '../../entities/lecturer';
import { Announcement } from '../../entities/announcement';
import { Module } from '../../entities/module';
import { TeachingAssistant } from '../../entities/teachingAssistant';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


/*
  Generated class for the TeachingAssistantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TeachingAssistantProvider {

	ipAddress = 'localhost';
	portNo = '8080';
	fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/LearningHubSystem-rest/webresources/ta';
	
	baseUrl = "/api/ta";

  constructor(public platform: Platform,
				private httpClient: HttpClient) {
    console.log('Hello TeachingAssistantProvider Provider');
  }


  updateTA(ta: TeachingAssistant): Observable<any>
	{
		let updateTaReq = {"ta": ta};
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}
		
		return this.httpClient.post<any>(path, updateTaReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	}

	getCurrentTA(username: string): Observable<any>
	{
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}
		
		return this.httpClient.get<any>(path + "/getTa" + "/" + username).pipe
		(
			catchError(this.handleError)
		);
	}


	private handleError(error: HttpErrorResponse)
	{
		if (error.error instanceof ErrorEvent) 
		{		
			console.error('An unknown error has occurred:', error.error.message);
		} 
		else 
		{		
			console.error(" A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error.message}`);
		}
		
		return new ErrorObservable(error);
	}


}
