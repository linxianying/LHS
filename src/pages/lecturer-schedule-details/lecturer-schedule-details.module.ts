import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LecturerScheduleDetailsPage } from './lecturer-schedule-details';

@NgModule({
  declarations: [
    LecturerScheduleDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(LecturerScheduleDetailsPage),
  ],
})
export class LecturerScheduleDetailsPageModule {}
