import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CommentForumPage } from './comment-forum';

@NgModule({
  declarations: [
    CommentForumPage,
  ],
  imports: [
    IonicPageModule.forChild(CommentForumPage),
  ],
})
export class CommentForumPageModule {}
