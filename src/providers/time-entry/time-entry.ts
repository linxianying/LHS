import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Platform } from 'ionic-angular';

import { Student } from '../../entities/student';
import { Lecturer } from '../../entities/lecturer';
import { TimeEntry } from '../../entities/timeEntry';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TimeEntryProvider {

    ipAddress = 'localhost';
	portNo = '8080';
	fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/LearningHubSystem-rest/webresources/schedule';
	
	baseUrl = "/api/schedule";


	username = "";
	password = "";
	loginCredential = "";

	constructor(public platform: Platform,
				private httpClient: HttpClient)
	{
	}

	getEnrolledTimeEntry(username: string): Observable<any>
	{

		console.error('******** getEnrolledTimeEntry: ' + username);
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}
		
		return this.httpClient.get<any>(path + "/retrieveTimeEntryByName/" + username).pipe
		(
			catchError(this.handleError)
		);
	}


	retrieveTimeEntry(id: number): Observable<any> 
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
		
		return this.httpClient.get<any>(path + "/retrieveTimeEntry/" + id).pipe
		(
			catchError(this.handleError)
		);
	}

	createTimeEntry(timeEntry: TimeEntry, username: string): Observable<any>
	{
		let createTimeEntryReq = {"timeEntry": timeEntry, "username": username};
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}				
		
		return this.httpClient.put<any>(path, createTimeEntryReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	}

	updateTimeEntry(timeEntry: TimeEntry): Observable<any>
	{
		let updateTimeEntryReq = {"timeEntry": timeEntry};
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}
		
		return this.httpClient.post<any>(path, updateTimeEntryReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	}

	deleteTimeEntry(id: number): Observable<any> 
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
		
		return this.httpClient.delete<any>(path + "?id=" + id).pipe
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
