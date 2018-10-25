import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CausesPage } from './causes';

@NgModule({
  declarations: [
    CausesPage,
  ],
  imports: [
    IonicPageModule.forChild(CausesPage),
  ],
})
export class CausesPageModule {}
