import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Platform } from 'ionic-angular';

import { Lecturer} from '../../entities/lecturer';
import { Announcement } from '../../entities/announcement';
import { Module } from '../../entities/module';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LecturerProvider {

	ipAddress = 'localhost';
	portNo = '8080';
	fullBaseUrl = 'http://' + this.ipAddress + ':' + this.portNo + '/LearningHubSystem-rest/webresources/lecturer';
	
	baseUrl = "/api/lecturer";

	filteredLecturers : Lecturer[];


  	constructor(public platform: Platform, private httpClient: HttpClient) {
    	console.log('Hello LecturerProvider Provider');
  	}

	getSpecificLecturer(lecturerId: number): Observable<any>
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
		
		return this.httpClient.get<any>(path + "/retrieveSpecificLecturer/" + lecturerId).pipe
		(
			catchError(this.handleError)
		);
	}

	updateLecturerPassword(id: number, newPassword: string): Observable<any>
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
		
		return this.httpClient.get<any>(path + "/updateLecturerPassword/" + id+"/"+newPassword).pipe
		(
			catchError(this.handleError)
		);
	}

	updateStudentPassword(id: number, newPassword: string): Observable<any>
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
		
		return this.httpClient.get<any>(path + "/updateStudentPassword/" + id+"/"+newPassword).pipe
		(
			catchError(this.handleError)
		);
	}

	updateTAPassword(id: number, newPassword: string): Observable<any>
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
		
		return this.httpClient.get<any>(path + "/updateTAPassword/" + id+"/"+newPassword).pipe
		(
			catchError(this.handleError)
		);
	}

	updateAdminPassword(id: number, newPassword: string): Observable<any>
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
		
		return this.httpClient.get<any>(path + "/updateAdminPassword/" + id+"/"+newPassword).pipe
		(
			catchError(this.handleError)
		);
	}

	getEnrolledModules(lecturerId: number): Observable<any>
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
		
		return this.httpClient.get<any>(path + "/retrieveEnrolledModules/" + lecturerId).pipe
		(
			catchError(this.handleError)
		);
	}

	getAllLecturers(): Observable<any>
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
		
		return this.httpClient.get<any>(path + "/retrieveAllLecturers/").pipe
		(
			catchError(this.handleError)
		);
	}
	
	createAnnouncement(announcement: Announcement, moduleId:number, username: string): Observable<any>
	 {
	  let createAnnouncementReq = {"announcement": announcement, "moduleId": moduleId, "username": username};
	  let path: string = '';
	  
	  if(this.platform.is('core') || this.platform.is('mobileweb')) 
	  {
	   path = this.baseUrl;
	  }
	  else
	  {
	   path = this.fullBaseUrl;
	  }    
	  
	  return this.httpClient.put<any>(path, createAnnouncementReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	 }



	 assignModule(moduleId:number, lecturerId: number): Observable<any>
	 {
	  let assignModuleReq = {"lecturerId": lecturerId, "moduleId": moduleId};
	  let path: string = '';
	  
	  if(this.platform.is('core') || this.platform.is('mobileweb')) 
	  {
	   path = this.baseUrl;
	  }
	  else
	  {
	   path = this.fullBaseUrl;
	  }    
	  
	  return this.httpClient.put<any>(path + "/assignModule", assignModuleReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	 }

	 dropModule(moduleId:number, lecturerId: number): Observable<any>
	 {
	  let dropModuleReq = {"lecturerId": lecturerId, "moduleId": moduleId};
	  let path: string = '';
	  
	  if(this.platform.is('core') || this.platform.is('mobileweb')) 
	  {
	   path = this.baseUrl;
	  }
	  else
	  {
	   path = this.fullBaseUrl;
	  }    
	  
	  return this.httpClient.put<any>(path + "/dropModule", dropModuleReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	 }

	 deleteLecturer(lecturerId: number): Observable<any>
	{	let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}
		

		return this.httpClient.delete<any>(path + "/" + lecturerId).pipe
		(
			catchError(this.handleError)
		);
	}

	updateLecturer(lecturer: Lecturer): Observable<any>
	{
		let updateLecturerReq = {"lecturer": lecturer};
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}
		
		return this.httpClient.post<any>(path, updateLecturerReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	}

	getCurrentLecturer(username: string): Observable<any>
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
		
		return this.httpClient.get<any>(path + "/getLecturer" + "/" + username).pipe
		(
			catchError(this.handleError)
		);
	}

	filterLecturers(searchTerm)
	{	
		this.getAllLecturers().subscribe(
      		response => {
        this.filteredLecturers = response.lecturer; 
      		},
      error => {       
      }
    );
		return this.filteredLecturers.filter((lecturer: Lecturer) => {
        return lecturer.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
      });


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
