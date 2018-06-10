import { PollingResultsPage } from './../polling-results/polling-results';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * 
 * Generated class for the PoliticalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-political',
  templateUrl: 'political.html',
})
export class PoliticalPage {
  pollResult = PollingResultsPage;
  poll: any = {};
  option: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage: Storage) {
    this.storage.get("Poll").then((val) => {
      this.poll = val;
      console.log(this.poll);
    })
  }
  
  submitPoll() {
    console.log(this.option);
    this.poll.selectedOption = this.option;
    this.navCtrl.push(this.pollResult,this.poll);
  }

}
