import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { LecturerScheduleDetailsPage } from '../pages/lecturer-schedule-details/lecturer-schedule-details';

import { StudentModuleDetailsPage } from '../pages/student-module-details/student-module-details';
import { StudentFilePage } from '../pages/student-file/student-file';
import { TaModuleDetailsPage } from '../pages/ta-module-details/ta-module-details';



import { ModuleDetailPage } from '../pages/module-detail/module-detail';
import { CreateModulePage } from '../pages/create-module/create-module';
import { ModuleAssignmentPage } from '../pages/module-assignment/module-assignment';
import { RegisterModulePage } from '../pages/register-module/register-module';
import { RegisterModuleStudentPage } from '../pages/register-module-student/register-module-student';
import { RegisterModuleTaPage } from '../pages/register-module-ta/register-module-ta';
import { UpdateModulePage } from '../pages/update-module/update-module';
import { AdminLecturerPage } from '../pages/admin-lecturer/admin-lecturer';
import { AdminStudentPage } from '../pages/admin-student/admin-student';
import { AdminTaPage } from '../pages/admin-ta/admin-ta';
import { UpdateLecturerPage } from '../pages/update-lecturer/update-lecturer';
import { PasswordPage } from '../pages/password/password';



import { LecturerModuleDetailsPage } from '../pages/lecturer-module-details/lecturer-module-details';
import { LecturerFilePage } from '../pages/lecturer-file/lecturer-file';
import { LecturerLoginPage } from '../pages/lecturer-login/lecturer-login';
import { AdminLoginPage } from '../pages/admin-login/admin-login';
import { AdminSchedulePage } from '../pages/admin-schedule/admin-schedule';
import { AdminModuleManagementPage } from '../pages/admin-module-management/admin-module-management';
import { AdminUserManagementPage } from '../pages/admin-user-management/admin-user-management';
import { TaLoginPage } from '../pages/ta-login/ta-login';
import { TaModulePage } from '../pages/ta-module/ta-module';
import { TaSchedulePage } from '../pages/ta-schedule/ta-schedule';


import { StudentDetailsPage } from '../pages/student-details/student-details';
import { LecturerDetailsPage } from '../pages/lecturer-details/lecturer-details';
import { TaDetailsPage } from '../pages/ta-details/ta-details';
import { StudentAddTimeEntryPage } from '../pages/student-add-time-entry/student-add-time-entry';
import { LecturerAddTimeEntryPage } from '../pages/lecturer-add-time-entry/lecturer-add-time-entry';
import { NewAnnouncementPage } from '../pages/new-announcement/new-announcement';

import { StudentProfilePage } from '../pages/student-profile/student-profile';
import { LecturerProfilePage } from '../pages/lecturer-profile/lecturer-profile';
import { TaProfilePage } from '../pages/ta-profile/ta-profile';
import { AdminProfilePage } from '../pages/admin-profile/admin-profile';




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
    ModuleDetailPage,
    CreateModulePage,
    ModuleAssignmentPage,
    RegisterModulePage, 
    UpdateModulePage,
    AdminLecturerPage,
    AdminStudentPage,
    AdminTaPage,
    UpdateLecturerPage,
    RegisterModuleStudentPage,
    RegisterModuleTaPage,
   

    StudentDetailsPage,
    LecturerLoginPage,
    LecturerDetailsPage,
    TaDetailsPage,
    StudentAddTimeEntryPage,
    AdminLoginPage,
    TaLoginPage,
    NewAnnouncementPage,
    AdminSchedulePage,
    AdminModuleManagementPage,
    AdminUserManagementPage,
    TaModulePage,
    TaSchedulePage,
    StudentProfilePage,
    LecturerProfilePage,
    TaProfilePage,
    AdminProfilePage,
    TaModuleDetailsPage,
    LecturerScheduleDetailsPage,
    LecturerAddTimeEntryPage,
    PasswordPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule
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
    LecturerLoginPage,
    StudentDashboardPage,
    StudentModulePage,
    StudentSchedulePage,
    ScheduleDetailsPage,
    StudentModuleDetailsPage,
    StudentFilePage,
    LecturerModuleDetailsPage,
    LecturerFilePage,
    ModuleDetailPage,
    UpdateModulePage,
    CreateModulePage,
    ModuleAssignmentPage,
    RegisterModulePage,
    AdminLecturerPage,
    AdminStudentPage,
    AdminTaPage,
    UpdateLecturerPage,
    RegisterModuleStudentPage,
    RegisterModuleTaPage,
   
    StudentDetailsPage,
    LecturerDetailsPage,
    TaDetailsPage,

    StudentAddTimeEntryPage,


    StudentAddTimeEntryPage,
    AdminLoginPage,
    TaLoginPage,
    NewAnnouncementPage,
    AdminSchedulePage,
    AdminModuleManagementPage,
    AdminUserManagementPage,
    TaModulePage,

    TaSchedulePage,


    TaSchedulePage,
    StudentProfilePage,
    LecturerProfilePage,
    TaProfilePage,
    AdminProfilePage,
    TaModuleDetailsPage,
    LecturerScheduleDetailsPage,
    LecturerAddTimeEntryPage,
    PasswordPage

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
