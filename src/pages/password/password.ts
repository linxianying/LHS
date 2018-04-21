import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { LecturerProvider } from '../../providers/lecturer/lecturer';

/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {
	oldPassword: string;
	input1: string;
	newPassword: string;
	id: number;
	role: string;
	infoMessage: string;
	errorMessage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public lecturerProvider: LecturerProvider) {
  	this.oldPassword = navParams.get('oldPassword');
  	this.id = navParams.get('id');
  	this.role = navParams.get('role');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPage');
  }

  

  update(updatePasswordForm: NgForm){
  console.error(this.input1);
	console.error(this.oldPassword);
	if(updatePasswordForm.valid){
	  	if(this.input1===this.oldPassword){
	  		if(this.role==='lecturer'){
		  		this.lecturerProvider.updateLecturerPassword(this.id, this.newPassword).subscribe(
			      response => {
			        
			        window.alert('lecturer password updated successfully!');
		       
			      },
			      error => {        
			        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			         window.alert('an error happened when update lecturer password!');
			      }
			    );

	  		}
	  		else if(this.role==='ta'){
	  			this.lecturerProvider.updateTAPassword(this.id, this.newPassword).subscribe(
			      response => {
			        
			        window.alert('TA password updated successfully!');
		       
			      },
			      error => {        
			        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			         window.alert('an error happened when update TA password!');
			      }
			    );

	  		}
	  		else if(this.role==='student'){
	  			this.lecturerProvider.updateStudentPassword(this.id, this.newPassword).subscribe(
			      response => {
			        
			        window.alert('student password updated successfully!');
		       
			      },
			      error => {        
			        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			         window.alert('an error happened when update student password!');
			      }
			    );

	  		}
	  		else if(this.role==='admin'){
	  			this.lecturerProvider.updateAdminPassword(this.id, this.newPassword).subscribe(
			      response => {
			        
			        window.alert('admin password updated successfully!');
		       
			      },
			      error => {        
			        this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
			         window.alert('an error happened when update admin password!');
			      }
			    );
	  		}

	  	}
	  	else{
	  		window.alert('You have entered the old password wrongly!');
	  	}
  	}
  	else
	{
		this.infoMessage = null;
		this.errorMessage = "Input data validation error(s)";
		console.error("invalid");
	}	
  	
  }

}
