import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
/*Inicio componenete*/
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { PrincipalPage } from '../pages/principal/principal';
import { ProviderUsersProvider } from '../providers/provider-users/provider-users';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocationsProvider } from '../providers/locations/locations';
import { NeighborhoodsProvider } from '../providers/neighborhoods/neighborhoods';
import { RisksProvider } from '../providers/risks/risks';
import { MethodsPreventionsProvider } from '../providers/methods-preventions/methods-preventions';
import { PollsProvider } from '../providers/polls/polls';
import { QuestionsProvider } from '../providers/questions/questions';
import { OptionsQuestionsProvider } from '../providers/options-questions/options-questions';
import { RatingsProvider } from '../providers/ratings/ratings';
import { ResultSurveysProvider } from '../providers/result-surveys/result-surveys';
import { ApplySurveysProvider } from '../providers/apply-surveys/apply-surveys';
import { ForumsProvider } from '../providers/forums/forums';
import { CommentsForumsProvider } from '../providers/comments-forums/comments-forums';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    RegisterPage,
    LoginPage,
    PrincipalPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    RegisterPage,
    LoginPage,
    PrincipalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProviderUsersProvider,
    LocationsProvider,
    NeighborhoodsProvider,
    RisksProvider,
    MethodsPreventionsProvider,
    PollsProvider,
    QuestionsProvider,
    OptionsQuestionsProvider,
    RatingsProvider,
    ResultSurveysProvider,
    ApplySurveysProvider,
    ForumsProvider,
    CommentsForumsProvider
  ]
})
export class AppModule {}
