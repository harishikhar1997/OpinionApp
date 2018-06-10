import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-phone-sign-up',
  templateUrl: 'phone-sign-up.html',
})
export class PhoneSignUpPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams)
  {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneSignUpPage');
  }

}
