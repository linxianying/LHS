import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { StudentModulePage } from '../pages/student-module/student-module';
import { StudentSchedulePage } from '../pages/student-schedule/student-schedule';
import { StudentAnnouncementsPage } from '../pages/student-announcements/student-announcements';
import { ClassAndGroupsPage } from '../pages/class-and-groups/class-and-groups';
import { StudentModuleDetailsPage } from '../pages/student-module-details/student-module-details';
import { StudentFacilitatorsPage } from '../pages/student-facilitators/student-facilitators';

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
      { title: 'Home', component: HomePage },
      { title: 'Login', component: LoginPage },
      { title: 'Register', component: RegisterPage },
      { title: 'Module Overview', component: StudentModulePage },
      { title: 'Annoucement', component: StudentAnnouncementsPage },
      { title: 'Class and Groups', component: ClassAndGroupsPage },
      { title: 'Facilitators', component: StudentFacilitatorsPage },
      { title: 'ModuleDetails', component: StudentModuleDetailsPage },
      { title: 'Schedule', component: StudentSchedulePage }
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
