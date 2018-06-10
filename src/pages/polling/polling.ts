import { PollingResultsPage } from './../polling-results/polling-results';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import * as Web3 from 'web3';

@IonicPage()
@Component({
  selector: 'page-polling',
  templateUrl: 'polling.html',
})
export class PollingPage {
  // declare const require: any;
  // const Web3 = require('web3');
  poll: any = {};
  option: any;
  web3: any;
  public Opinion: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage
  ) {
    // console.log(Web3);
    // this.poll.question = "";
    this.storage.get("Poll").then((val) => {
      this.poll = val;
      console.log(this.poll);
    })
    if (typeof this.web3 !== 'undefined') {
                this.web3 = new Web3(this.web3.currentProvider);
        } else {
            // set the provider you want from Web3.providers
            this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }
        //To select first Account from testrpc
        this.web3.eth.defaultAccount = this.web3.eth.accounts[0];
    var OpinionContract = this.web3.eth.contract([
      {
        "constant": true,
        "inputs": [
          {
            "name": "_candidate",
            "type": "string"
          }
        ],
        "name": "showVotes",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "Pixel2",
        "outputs": [
          {
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "_candidate",
            "type": "string"
          }
        ],
        "name": "voteForCandidate",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]);
    
    this.Opinion = OpinionContract.at('0xecda65d928816f949930fee0c39563663dcd27b5');
    console.log(this.Opinion);
    // let candidates = {
    //   "Pixel 2": "candidate-1", "Oneplus5T": "candidate-2",
    //   "iPhone X": "candidate-3", "Galaxy Note 8": "candidate-4"
    // };
    // this.Opinion.
    // this.Opinion.getDetails(function (error, result) {
    //   console.log(result);
    //   if (!error) {
        
    //     $("#detail").html(result[0] + ' (' + result[1] + ' years old)');
    //     console.log(result);
    //   }
    //   else
    //     console.error(error);
    // });
    

    // $(document).ready(function () {

    //   let candidateNames = Object.keys(candidates);
    //   for (var i = 0; i < candidateNames.length; i++) {
    //     let name = candidateNames[i];
    //     let val = this.Opinion.totalVotesFor.call(name).toString();
    //     $("#" + candidates[name]).html(val);
    //   }
    // });
  }



  submitPoll() {
    console.log(this.option);
    console.log(this.Opinion);
    let x = this.Opinion;
    let y = this.option;
    let z = this.poll;
    // let pixel, oneplus, s8, iphonex;
    this.Opinion.voteForCandidate(y, { from: this.web3.eth.accounts[0] }, function () {
      // console.log(x.showVotes(y).c[0]);
      // this.poll.pixel = x.showVotes(y).c[0];
    });
    // this.Opinion.voteForCandidate("Pixel2", { from: this.web3.eth.accounts[0] }, function () {
      // console.log(x.showVotes(y).c[0]);
      this.poll.pixel = x.showVotes("Pixel2").c[0];
    // });
    // this.Opinion.voteForCandidate("Oneplus5", { from: this.web3.eth.accounts[0] }, function () {
      // console.log(x.showVotes(y).c[0]);
    this.poll.oneplus = x.showVotes("Oneplus5").c[0];
    // });
    // this.Opinion.voteForCandidate("S8", { from: this.web3.eth.accounts[0] }, function () {
      // console.log(x.showVotes(y).c[0]);
    this.poll.s8 = x.showVotes("S8").c[0];
    // });
    // this.Opinion.voteForCandidate("iPhoneX", { from: this.web3.eth.accounts[0] }, function () {
      // console.log(x.showVotes(y).c[0]);
    this.poll.iphonex = x.showVotes("iPhoneX").c[0];
    // });
    //Navigate to result page
    this.poll.selectedOption = this.option;
    this.navCtrl.push(PollingResultsPage,this.poll);
  }

}
