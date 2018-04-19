import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { RegisterPage } from '../pages/register/register';
import { StudentModulePage } from '../pages/student-module/student-module';
import { StudentSchedulePage } from '../pages/student-schedule/student-schedule';
import { StudentModuleDetailsPage } from '../pages/student-module-details/student-module-details';
import { StudentDetailsPage } from '../pages/student-details/student-details';
import { LecturerDetailsPage } from '../pages/lecturer-details/lecturer-details';
import { TaDetailsPage } from '../pages/ta-details/ta-details';
import { LecturerLoginPage } from '../pages/lecturer-login/lecturer-login';
import { AdminLoginPage } from '../pages/admin-login/admin-login';
import { TaLoginPage } from '../pages/ta-login/ta-login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) 
  {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: TaLoginPage },
      { title: 'Login', component: LoginPage },
      { title: 'TA Login', component: TaLoginPage },
      { title: 'Admin Login', component: AdminLoginPage },
      { title: 'Lecturer Login', component: LecturerLoginPage },
      { title: 'Register', component: RegisterPage },
      { title: 'Module Overview', component: StudentModulePage },
      { title: 'Schedule', component: StudentSchedulePage },
      { title: 'Logout', component: LogoutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
