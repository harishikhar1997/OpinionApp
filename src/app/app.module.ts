import { AllPage } from './../pages/all/all';
import { EnvironmentalPage } from './../pages/environmental/environmental';
import { SportsPage } from './../pages/sports/sports';
import { LifestylePage } from './../pages/lifestyle/lifestyle';
import { PoliticalPage } from './../pages/political/political';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PhoneSignUpPage } from '../pages/phone-sign-up/phone-sign-up';
import { PhoneVerificationPage } from '../pages/phone-verification/phone-verification';
import { CreatePollPage } from '../pages/create-poll/create-poll';
import { CreateSurveyPage } from '../pages/create-survey/create-survey';
import { ShowPollPage } from '../pages/show-poll/show-poll';
import { ShowSurveyPage } from '../pages/show-survey/show-survey';
import { HumanRightsPage } from '../pages/human-rights/human-rights';
import { TechnologyPage } from '../pages/technology/technology';
import { EntertainmentPage } from '../pages/entertainment/entertainment';
import { PollingPage } from '../pages/polling/polling';
import { PollingResultsPage } from '../pages/polling-results/polling-results';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PhoneSignUpPage,
    PhoneVerificationPage,
    CreatePollPage,
    CreateSurveyPage,
    ShowPollPage,
    ShowSurveyPage,
    PoliticalPage,
    HumanRightsPage,
    TechnologyPage,
    LifestylePage,
    EntertainmentPage,
    SportsPage,
    EnvironmentalPage,
    AllPage,
    PollingPage,
    PollingResultsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PhoneSignUpPage,
    PhoneVerificationPage,
    CreatePollPage,
    CreateSurveyPage,
    ShowPollPage,
    ShowSurveyPage,
    PoliticalPage,
    HumanRightsPage,
    TechnologyPage,
    LifestylePage,
    EntertainmentPage,
    SportsPage,
    EnvironmentalPage,
    AllPage,
    PollingPage,
    PollingResultsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
