import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LecturerLoginPage } from './lecturer-login';

@NgModule({
  declarations: [
    LecturerLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LecturerLoginPage),
  ],
})
export class LecturerLoginPageModule {}
