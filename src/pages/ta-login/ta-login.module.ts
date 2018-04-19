import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaLoginPage } from './ta-login';

@NgModule({
  declarations: [
    TaLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(TaLoginPage),
  ],
})
export class TaLoginPageModule {}
