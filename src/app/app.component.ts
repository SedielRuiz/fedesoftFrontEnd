import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { PrincipalPage } from '../pages/principal/principal';
import { ProfilePage } from '../pages/profile/profile';
import { RisksPage } from '../pages/risks/risks';
import { MethodsPreventionsPage } from '../pages/methods-preventions/methods-preventions';
import { ForumPage } from '../pages/forum/forum';
import { RatingsPage } from '../pages/ratings/ratings';
import { SurveysPage } from '../pages/surveys/surveys';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    localStorage.setItem("apiUrl","http://localhost:3000/")
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Inicio', component: PrincipalPage },
      { title: 'Perfil', component: ProfilePage },
      { title: 'Riesgos', component: RisksPage },
      { title: 'Metodos de prevención', component: MethodsPreventionsPage },
      { title: 'Foros', component: ForumPage },
      { title: 'Calificar plataforma', component: RatingsPage },
      { title: 'Encuestas', component: SurveysPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
  logOut(){
    localStorage.removeItem("user")
    localStorage.removeItem("jwt")
    this.menu.close();
    this.nav.setRoot(LoginPage)
  }
  public isThereASession():boolean{
    return localStorage.getItem("jwt")!= undefined;
  }
}
