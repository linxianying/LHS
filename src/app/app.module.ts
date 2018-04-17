import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { RegisterPage } from '../pages/register/register';
import { LecturerModulePage } from '../pages/lecturer-module/lecturer-module';
import { LecturerSchedulePage } from '../pages/lecturer-schedule/lecturer-schedule';
import { StudentDashboardPage } from '../pages/student-dashboard/student-dashboard';
import { StudentModulePage } from '../pages/student-module/student-module';
import { StudentSchedulePage } from '../pages/student-schedule/student-schedule';
import { ScheduleDetailsPage } from '../pages/schedule-details/schedule-details';
import { StudentModuleDetailsPage } from '../pages/student-module-details/student-module-details';
import { StudentFilePage } from '../pages/student-file/student-file';
import { LecturerModuleDetailsPage } from '../pages/Lecturer-module-details/Lecturer-module-details';
import { LecturerFilePage } from '../pages/Lecturer-file/Lecturer-file';
import { StudentDetailsPage } from '../pages/student-details/student-details';
import { LecturerDetailsPage } from '../pages/lecturer-details/lecturer-details';
import { TaDetailsPage } from '../pages/ta-details/ta-details';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StudentProvider } from '../providers/student/student';
import { LecturerProvider } from '../providers/lecturer/lecturer';
import { TeachingAssistantProvider } from '../providers/teaching-assistant/teaching-assistant';
import { AnnounProvider } from '../providers/announ/announ';
import { AnnouncementProvider } from '../providers/announcement/announcement';
import { TimeEntryProvider } from '../providers/time-entry/time-entry';
import { AdministratorProvider } from '../providers/administrator/administrator';
import { ModuleProvider } from '../providers/module/module';
import { FileEntityProvider } from '../providers/file-entity/file-entity';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LogoutPage,
    RegisterPage,
    LecturerModulePage,
    LecturerSchedulePage,
    StudentDashboardPage,
    StudentModulePage,
    StudentSchedulePage,
    ScheduleDetailsPage,
    StudentModuleDetailsPage,
    StudentFilePage,
    LecturerModuleDetailsPage,
    LecturerFilePage,
    StudentDetailsPage,
    LecturerDetailsPage,
    TaDetailsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LogoutPage,
    RegisterPage,
    LecturerModulePage,
    LecturerSchedulePage,
    StudentDashboardPage,
    StudentModulePage,
    StudentSchedulePage,
    ScheduleDetailsPage,
    StudentModuleDetailsPage,
    StudentFilePage,
    LecturerModuleDetailsPage,
    LecturerFilePage,
    StudentDetailsPage,
    LecturerDetailsPage,
    TaDetailsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StudentProvider,
    LecturerProvider,
    TeachingAssistantProvider,
    AnnounProvider,
    AnnouncementProvider,
    TimeEntryProvider,
    AdministratorProvider,
    ModuleProvider,
    FileEntityProvider
  ]
})
export class AppModule {}
