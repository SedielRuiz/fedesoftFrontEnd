import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RisksPage } from '../../pages/risks/risks';
import { MethodsPreventionsPage } from '../../pages/methods-preventions/methods-preventions';
import { SurveysPage } from '../../pages/surveys/surveys';

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
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
  }

  ionViewDidLoad() {
  }
  slides = [
    {
      title: "Riesgos",
      description: "El e​mbarazo y la maternidad en la adolescencia son fenómenos que afectan la salud sexual, la salud reproductiva y el <br> bienestar de las mujeres jovenes..",
      image: "assets/imgs/riesgos.png",
      component:RisksPage
    },
    {
      title: "Metodos",
      description: "los anticonceptivos son métodos o procedimientos que previenen un embarazo en mujeres sexualmente activas, ya sean ellas o sus parejas quienes los usen. Pueden ser hormonales o no hormonales, transitorios o definitivos.",
      image: "assets/imgs/metodosa.png",
      component:MethodsPreventionsPage
    },
    {
      title: "Causas",
      description: "La falta de acceso a métodos anticonceptivos: Adquirir métodos anticonceptivos como condones o píldoras aún se encuentra estigmatizado y muchos jóvenes no intentan obtenerlos por miedo o vergüenza.<br><a href='#'></a>",
      image: "assets/imgs/metodosa.png",
    }
  ];
  readMore(section){
    this.navCtrl.setRoot(section.component);
  }
  test(){
    this.navCtrl.setRoot(SurveysPage);
  }
}
