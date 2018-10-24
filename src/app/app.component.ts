import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { PrincipalPage } from '../pages/principal/principal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
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
      { title: 'Inicio', component: HelloIonicPage },
      { title: 'Login', component: LoginPage },
      { title: 'Registrate', component: RegisterPage },
      { title: 'Actualizar información', component: RegisterPage },
      { title: 'Principal', component: PrincipalPage }
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
    this.nav.setRoot(LoginPage)
  }
  public isThereASession():boolean{
    return localStorage.getItem("jwt")!= undefined;
  }
}
