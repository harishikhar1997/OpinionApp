import { AllPage } from './../all/all';
import { EnvironmentalPage } from './../environmental/environmental';
import { SportsPage } from './../sports/sports';
import { TechnologyPage } from './../technology/technology';
import { HumanRightsPage } from './../human-rights/human-rights';
import { PoliticalPage } from './../political/political';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LifestylePage } from '../lifestyle/lifestyle';
import { EntertainmentPage } from '../entertainment/entertainment';


@IonicPage()
@Component({
  selector: 'page-show-poll',
  templateUrl: 'show-poll.html',
})
export class ShowPollPage {
  political = PoliticalPage;
  humanRights = HumanRightsPage
  technology = TechnologyPage;
  lifestyle = LifestylePage;
  entertainment = EntertainmentPage;
  sports = SportsPage;
  environmental = EnvironmentalPage;
  all = AllPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowPollPage');
  }

}
