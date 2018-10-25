import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalTestPage } from './modal-test';

@NgModule({
  declarations: [
    ModalTestPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalTestPage),
  ],
})
export class ModalTestPageModule {}
