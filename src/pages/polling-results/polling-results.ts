import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PollingResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-polling-results',
  templateUrl: 'polling-results.html',
})
export class PollingResultsPage {
  poll: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.poll = this.navParams.data;
    console.log(this.poll);
    
  }


}
