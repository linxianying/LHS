import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Student } from '../../entities/student';

import { RegisterPage } from '../register/register';

import { StudentProvider } from '../../providers/student/student';

import { StudentProfilePage } from '../student-profile/student-profile';

import { HomePage } from '../home/home';
import { LogoutPage } from '../logout/logout';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


export class LoginPage {
  fromPage: string;
  student : Student;
  submitted: boolean;
  isLogin: boolean;
  username: string;
  password: string;
  errorMessage: string;
  infoMessage: string;
  slides = [
    {
      title: "National University of Singapore",
      description: "NUS is an autonomous research university in Singapore. Founded in 1905 as a medical college, it is the oldest institute of higher learning in Singapore, as well as the largest university in the country in terms of student enrollment and curriculum offered. ",
      image: "assets/imgs/nus.png",
    },
    {
      title: "The University of Oxford",
      description: "The University of Oxford is a collegiate research university located in Oxford, England. It has no known date of foundation, but there is evidence of teaching as far back as 1096, making it the oldest university in the English-speaking world and the world's second-oldest university in continuous operation.",
      image: "assets/imgs/oxford.png",
    },
    {
      title: "Howard University",
      description: "Howard is a federally chartered, private, coeducational, nonsectarian, historically black university in Washington. It is recognized by the Carnegie Foundation as a research university with high research activity and is accredited by the Middle States Commission on Higher Education.",
      image: "assets/imgs/howard.png",
    },
    {
      title: "University of Otago",
      description: "Otāgo is a collegiate university located in Dunedin, Otago, New Zealand. It scores highly for average research quality, and in 2006 was second in New Zealand only to the University of Auckland in the number of A-rated academic researchers it employs.",
      image: "assets/imgs/otago.png",
    },
    {
      title: "University of Toronto",
      description: "Toronto is a public research university in Toronto, Ontario, Canada on the grounds that surround Queen's Park. It was founded by royal charter in 1827 as King's College, the first institution of higher learning in the colony of Upper Canada.",
      image: "assets/imgs/toronto.png",
    }
  ];
	
	
	constructor(public navCtrl: NavController,
        public alertCtrl: AlertController,
        public toastCtrl: ToastController,
        public navParams: NavParams,
        public studentProvider: StudentProvider)
  {
    this.submitted = false;
    this.isLogin = false;
    this.fromPage = navParams.get('fromPage');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    if(sessionStorage.getItem("isLogin") === "true")
    {
      this.isLogin = true;
    }
    
    this.username = sessionStorage.getItem("username");
  }


  ionViewWillEnter() {
    console.log('ionViewWillEnter StudentloginPage');
  }

  viewUserDetails(){
    this.navCtrl.push(StudentProfilePage);
  }

  logout(){
    this.navCtrl.push(LogoutPage, {fromPage: 'home'});
  }

  clear()
  {
    this.username = "";
    this.password = "";
  }

  login(loginForm: NgForm)
  {
    this.submitted = true;
    
    if (loginForm.valid) 
    {
      this.studentProvider.getStudent(this.username, this.password).subscribe(
        response => {         
          this.infoMessage = "Student login successfully";
          this.isLogin = true;
          this.student=response.student;
          sessionStorage.setItem("username", this.username);   
          sessionStorage.setItem("isLogin", "true");
          sessionStorage.setItem("role", "student");
          this.studentProvider.setLoginCredential(this.username, this.password);
          let toast = this.toastCtrl.create(
          {
            message: 'Welcome back ' + this.username,
            duration: 3000
          });
        
          toast.present();
        },
        error => {
          this.errorMessage = "HTTP " + error.status + ": " + error.error.message;
          let alert = this.alertCtrl.create(
          {
            title: 'Login Failed',
            subTitle: 'Invalid login credential or expired member identity.',
            buttons: ['OK']
          });
          
          alert.present(); 
        });
      
      
    }
    else
    {
    }
  }

}
