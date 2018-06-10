import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowPollPage } from './show-poll';

@NgModule({
  declarations: [
    ShowPollPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowPollPage),
  ],
})
export class ShowPollPageModule {}
