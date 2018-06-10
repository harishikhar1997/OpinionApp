import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowSurveyPage } from './show-survey';

@NgModule({
  declarations: [
    ShowSurveyPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowSurveyPage),
  ],
})
export class ShowSurveyPageModule {}
