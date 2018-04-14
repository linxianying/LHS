import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Platform } from 'ionic-angular';

import { Student } from '../../entities/student';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudentProvider {

    ipAddress = '192.168.0.100';
	portNo = '8080';
	fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/LearningHubSystem-war/Resources/Student';
	
	baseUrl = "/api/Student";
	
	username = "";
	password = "";
	loginCredential = "";
	
	
	
	constructor(public platform: Platform,
				private httpClient: HttpClient)
	{
	}

	setLoginCredential(username: string, password: string)
	{
		this.username = username;
		this.password = password;
		this.loginCredential = "?username=" + username + "&password=" + password;
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
