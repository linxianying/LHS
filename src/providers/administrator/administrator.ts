import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Platform } from 'ionic-angular';

import { Administrator } from '../../entities/administrator';

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

	ipAddress = 'localhost';
	portNo = '8080';
	fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/LearningHubSystem-rest/webresources/administrator';
	
	baseUrl = "/api/administrator";
	
	username = "";
	password = "";
	loginCredential = "";


  constructor(public httpClient: HttpClient,public platform: Platform) {
    console.log('Hello AdministratorProvider Provider');
  }

  getAdmin(adminId: number): Observable<any>
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
		
		return this.httpClient.get<any>(path + "/retrieveAdmin/" + adminId).pipe
		(
			catchError(this.handleError)
		);
	}

	updateAdmin(admin:Administrator): Observable<any>
	{
		let updateAdminReq = {"admin": admin};
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}
		
		return this.httpClient.post<any>(path, updateAdminReq, httpOptions).pipe
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
