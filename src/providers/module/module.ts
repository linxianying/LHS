import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Platform } from 'ionic-angular';

import { Module } from '../../entities/module';


const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ModuleProvider {


	ipAddress = '172.31.69.217';
	portNo = '8080';
	fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/LearningHubSystem-rest/webresources/module';
	
	baseUrl = "/api/module";
	
	username = "";
	password = "";
	loginCredential = "";

  	constructor(public platform: Platform, private httpClient: HttpClient) {
    	console.log('Hello ModuleProvider Provider');
  	}

    getEnrolledModules(username: string): Observable<any>
	{

		console.error('******** getEnrolledModules: ' + username);
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}
		
		return this.httpClient.get<any>(path + "/retrieveEnrolledModules/" + username).pipe
		(
			catchError(this.handleError)
		);
	}


	getSpecificModule(moduleId: number): Observable<any>
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
		
		return this.httpClient.get<any>(path + "/retrieveSpecificModule/" + moduleId).pipe
		(
			catchError(this.handleError)
		);
	}

	getAnnouncements(moduleId: number): Observable<any>
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
		
		return this.httpClient.get<any>(path + "/retrieveAnnoucements/" + moduleId).pipe
		(
			catchError(this.handleError)
		);
	}


	getClassAndGroups(moduleId: number): Observable<any>
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
		
		return this.httpClient.get<any>(path + "retrieveClassAndGroups/" + moduleId).pipe
		(
			catchError(this.handleError)
		);
	}

	getLecturers(moduleId: number): Observable<any>
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
		
		return this.httpClient.get<any>(path + "retrieveLecturers/" + moduleId).pipe
		(
			catchError(this.handleError)
		);
	}

	getStudents(moduleId: number): Observable<any>
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
		
		return this.httpClient.get<any>(path + "retrieveStudents/" + moduleId).pipe
		(
			catchError(this.handleError)
		);
	}

	getTAs(moduleId: number): Observable<any>
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
		
		return this.httpClient.get<any>(path + "retrieveTAs/" + moduleId).pipe
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
