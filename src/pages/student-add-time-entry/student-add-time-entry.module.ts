import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentAddTimeEntryPage } from './student-add-time-entry';

@NgModule({
  declarations: [
    StudentAddTimeEntryPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentAddTimeEntryPage),
  ],
})
export class StudentAddTimeEntryPageModule {}
