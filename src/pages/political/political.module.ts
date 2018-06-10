import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoliticalPage } from './political';

@NgModule({
  declarations: [
    PoliticalPage,
  ],
  imports: [
    IonicPageModule.forChild(PoliticalPage),
  ],
})
export class PoliticalPageModule {}
