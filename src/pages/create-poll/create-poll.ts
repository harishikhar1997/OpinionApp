import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-create-poll',
  templateUrl: 'create-poll.html',
})
export class CreatePollPage {
  pollNo = 1456;
  userID = "d345er456d";
  question: string;
  categories: string;
  option: string;
  optionList: Array<any> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage:Storage
  ) {
    
  }
  addOption() {
    console.log(this.option);
    this.optionList.push(this.option);
    this.option = ""    
  }
  createPoll() {
    // console.log(this.question);
    // console.log(this.optionList);
    // console.log(this.categories);
    let poll = {
      question: this.question,
      pollNo: this.pollNo,
      userID: this.userID,
      category: this.categories,
      optionList:this.optionList,
    }
    console.log(poll);
    //Locally Store User Data
    this.storage.set("Poll", poll);
    this.navCtrl.pop();
  }



}
