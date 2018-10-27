import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  search:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  slides = [
    {
      title: "Riesgos?",
      description: "<b>Detalle</b> aqui van los riesgos khzcgvejnf smcmb bdsbc,  aadgkdxxhbw.cf ,jdgs...<br><a href='#'>Leer más</a>",
      image: "assets/imgs/riesgos.png",
    },
    {
      title: "Metodos",
      description: "<b>Anticonceptivos</b> aqui van los metodos jasdiuscbukf jdghscisnd z,djgwsjnbc xjkesdnbv  j,wdgefd...<br><a href='#'>Leer más</a>",
      image: "assets/imgs/metodosa.png",
    },
    {
      title: "Causas",
      description: "The <b>Cuales</b> Causas por las cuales se dan los embarazos.<br><a href='#'>Leer más</a>",
      image: "assets/imgs/metodosa.png",
    }
  ];
}
