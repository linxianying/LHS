import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Platform } from 'ionic-angular';

<<<<<<< HEAD
=======

import { Lecturer} from '../../entities/lecturer';
import { Announcement } from '../../entities/announcement';
import { Module } from '../../entities/module';
>>>>>>> 455b81daddf90d1b485113ff334aaec138862109
import { TeachingAssistant } from '../../entities/teachingAssistant';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
<<<<<<< HEAD
=======

>>>>>>> 455b81daddf90d1b485113ff334aaec138862109

/*
  Generated class for the TeachingAssistantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TeachingAssistantProvider {

	ipAddress = 'localhost';
	portNo = '8080';
<<<<<<< HEAD
	fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/LearningHubSystem-rest/webresources/teachingAssitant';
	
	baseUrl = "/api/teachingAssitant";

  constructor(public platform: Platform, private httpClient: HttpClient) {
    console.log('Hello TeachingAssistantProvider Provider');
  }

  getAllTAs(): Observable<any>
	{
=======
	fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/LearningHubSystem-rest/webresources/ta';
	
	baseUrl = "/api/ta";

  constructor(public platform: Platform,
				private httpClient: HttpClient) {
    console.log('Hello TeachingAssistantProvider Provider');
  }


  updateTA(ta: TeachingAssistant): Observable<any>
	{
		let updateTaReq = {"ta": ta};
>>>>>>> 455b81daddf90d1b485113ff334aaec138862109
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}
		
<<<<<<< HEAD
		return this.httpClient.get<any>(path + "/retrieveAllTAs/").pipe
=======
		return this.httpClient.post<any>(path, updateTaReq, httpOptions).pipe
>>>>>>> 455b81daddf90d1b485113ff334aaec138862109
		(
			catchError(this.handleError)
		);
	}

<<<<<<< HEAD
	deleteTA(taId: number): Observable<any>
	{	
=======
	getCurrentTA(username: string): Observable<any>
	{
>>>>>>> 455b81daddf90d1b485113ff334aaec138862109
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}
		
<<<<<<< HEAD
		return this.httpClient.delete<any>(path + "/" + taId).pipe
		(
			catchError(this.handleError)
		);


	}

  private handleError(error: HttpErrorResponse)
=======
		return this.httpClient.get<any>(path + "/getTa" + "/" + username).pipe
		(
			catchError(this.handleError)
		);
	}


	private handleError(error: HttpErrorResponse)
>>>>>>> 455b81daddf90d1b485113ff334aaec138862109
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

<<<<<<< HEAD
=======

>>>>>>> 455b81daddf90d1b485113ff334aaec138862109
}
