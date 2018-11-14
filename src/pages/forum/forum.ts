import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForumsProvider } from '../../providers/forums/forums';
import { CommentForumPage } from '../comment-forum/comment-forum';

/**
 * Generated class for the ForumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {
  forums:any
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public provider:ForumsProvider
  ) {
    this.forums=[]
    this.loadForums()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
  }
  loadForums(){
    this.provider.getForums()
    .subscribe(
      (data)=>{
        this.forums = data;
      },
      (error)=>{console.log(error);}
    );
  }
  openForum(f){
    this.navCtrl.setRoot(CommentForumPage, {
      forum: f,
    });
  }
}
