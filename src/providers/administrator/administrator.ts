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

  constructor(public http: HttpClient) {
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

	updateAdmin(admin:Admin): Observable<any>
	{
		let updateAdminReq = {"module": module};
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

	createModule(module: Module): Observable<any>
	{
		let createModuleReq = {"module": module};
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}				
		
		return this.httpClient.put<any>(path, createMdouleReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	}

	updateModule(module: Module): Observable<any>
	{
		let updateModuleReq = {"module": module};
		let path: string = '';
		
		if(this.platform.is('core') || this.platform.is('mobileweb')) 
		{
			path = this.baseUrl;
		}
		else
		{
			path = this.fullBaseUrl;
		}
		
		return this.httpClient.post<any>(path, updateModuleReq, httpOptions).pipe
		(
			catchError(this.handleError)
		);
	}


}
