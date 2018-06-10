import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GivenPollPage } from './given-poll';

@NgModule({
  declarations: [
    GivenPollPage,
  ],
  imports: [
    IonicPageModule.forChild(GivenPollPage),
  ],
})
export class GivenPollPageModule {}
