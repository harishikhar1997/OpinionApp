import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreatePollPage } from '../create-poll/create-poll';
import { CreateSurveyPage } from '../create-survey/create-survey';
import { ShowPollPage } from '../show-poll/show-poll';
import { ShowSurveyPage } from '../show-survey/show-survey';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  createPoll = CreatePollPage;
  createSurvey = CreateSurveyPage;
  showPoll = ShowPollPage;
  showSurvey = ShowSurveyPage;

  constructor(
    public navCtrl: NavController,
    
  ) {
    
  }

}
