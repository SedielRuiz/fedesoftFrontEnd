/******************************************LIBRERIAS************/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

/*************************************COMPONENTES**************************/
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';

import { RegisterPage } from '../pages/register/register';
import { PrincipalPage } from '../pages/principal/principal';
import { ProfilePage } from '../pages/profile/profile';
import { RisksPage } from '../pages/risks/risks';
import { MethodsPreventionsPage } from '../pages/methods-preventions/methods-preventions';
import { ForumPage } from '../pages/forum/forum';
import { CommentForumPage } from '../pages/comment-forum/comment-forum';
/***************************************PROVEEDORES***********************/
import { ProviderUsersProvider } from '../providers/provider-users/provider-users';
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
import { RatingsPage } from '../pages/ratings/ratings';
import { SurveysPage } from '../pages/surveys/surveys';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    RegisterPage,
    LoginPage,
    PrincipalPage,
    ProfilePage,
    RisksPage,
    MethodsPreventionsPage,
    ForumPage,
    RatingsPage,
    SurveysPage,
    CommentForumPage
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
    PrincipalPage,
    ProfilePage,
    RisksPage,
    MethodsPreventionsPage,
    ForumPage,
    RatingsPage,
    SurveysPage,
    CommentForumPage
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
