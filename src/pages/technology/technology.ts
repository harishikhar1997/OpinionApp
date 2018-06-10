import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PollingPage } from './../polling/polling';

@IonicPage()
@Component({
  selector: 'page-technology',
  templateUrl: 'technology.html',
})
export class TechnologyPage {
  poll: any = {};
  //Pages
  polling = PollingPage;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage:Storage
  ) {
    this.poll.question = "";
    this.storage.get("Poll").then((val) => {
      this.poll = val;
      console.log(this.poll);
     })
  }

}
