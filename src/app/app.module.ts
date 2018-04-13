import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage
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
