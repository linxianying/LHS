import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LecturerAddTimeEntryPage } from './lecturer-add-time-entry';

@NgModule({
  declarations: [
    LecturerAddTimeEntryPage,
  ],
  imports: [
    IonicPageModule.forChild(LecturerAddTimeEntryPage),
  ],
})
export class LecturerAddTimeEntryPageModule {}
