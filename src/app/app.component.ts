import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { RegisterPage } from '../pages/register/register';
import { StudentModulePage } from '../pages/student-module/student-module';
import { LecturerModulePage } from '../pages/lecturer-module/lecturer-module';
import { StudentSchedulePage } from '../pages/student-schedule/student-schedule';
import { StudentModuleDetailsPage } from '../pages/student-module-details/student-module-details';
import { StudentDetailsPage } from '../pages/student-details/student-details';
import { LecturerDetailsPage } from '../pages/lecturer-details/lecturer-details';
import { TaDetailsPage } from '../pages/ta-details/ta-details';
import { LecturerModuleDetailsPage } from '../pages/lecturer-module-details/lecturer-module-details';
import { LecturerSchedulePage } from '../pages/lecturer-schedule/lecturer-schedule';
import { TaModulePage } from '../pages/ta-module/ta-module';
import { TaSchedulePage } from '../pages/ta-schedule/ta-schedule';
import { AdminSchedulePage } from '../pages/admin-schedule/admin-schedule';
import { AdminModuleManagementPage } from '../pages/admin-module-management/admin-module-management';
import { AdminUserManagementPage } from '../pages/admin-user-management/admin-user-management';
import { StudentProfilePage } from '../pages/student-profile/student-profile';
import { LecturerProfilePage } from '../pages/lecturer-profile/lecturer-profile';
import { TaProfilePage } from '../pages/ta-profile/ta-profile';
import { AdminProfilePage } from '../pages/admin-profile/admin-profile';
import { NewAnnouncementPage } from '../pages/new-announcement/new-announcement';
import { TaModuleDetailsPage } from '../pages/ta-module-details/ta-module-details';
import { PasswordPage } from '../pages/password/password';

 
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
      { title: 'Student Login', component: LoginPage },
      { title: 'Lecturer Login', component: LecturerLoginPage },
      { title: 'Admin Login', component: AdminLoginPage },
      { title: 'TA Login', component: TaLoginPage },
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

  buildMenu() {
  var role=sessionStorage.getItem("role");
  var isLogin=sessionStorage.getItem("isLogin");

  if(isLogin==="true"){
    if(role==="student"){
      return [
        { title: 'Home', component: HomePage },
        { title: 'Schedule', component: StudentSchedulePage },
        { title: 'Enrolled Modules', component: StudentModulePage },
        { title: 'Profile Management', component: StudentProfilePage},
        { title: 'Logout', component: LogoutPage }
      ];
      }
    else if (role==="lecturer"){
      return [
        { title: 'Home', component: HomePage },
        { title: 'Schedule', component: LecturerSchedulePage },
        { title: 'Teaching Modules', component: LecturerModulePage },
        { title: 'Profile Management', component: LecturerProfilePage},
        { title: 'Logout', component: LogoutPage }
      ];
    }
    else if (role==="ta"){
      return [
        { title: 'Home', component: HomePage },
        { title: 'Modules Involved', component: TaModulePage },
        { title: 'Profile Management', component: TaProfilePage},
        { title: 'Logout', component: LogoutPage }
      ];
    }
    else if (role==="admin"){
      return [
        { title: 'Home', component: HomePage },
        { title: 'User Management', component: AdminUserManagementPage },
        { title: 'Module Management', component: AdminModuleManagementPage },
        { title: 'Profile Management', component: AdminProfilePage},
        { title: 'Logout', component: LogoutPage }

      ];
    }
  }else{
    return [
          { title: 'Home', component: HomePage },
          { title: 'Student Login', component: LoginPage },
          { title: 'Lecturer Login', component: LecturerLoginPage },
          { title: 'Admin Login', component: AdminLoginPage },
          { title: 'TA Login', component: TaLoginPage },
          { title: 'Register', component: RegisterPage }
        ];

    }
  }
}
