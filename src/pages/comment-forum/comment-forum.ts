import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommentsForumsProvider } from '../../providers/comments-forums/comments-forums';

/**
 * Generated class for the CommentForumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment-forum',
  templateUrl: 'comment-forum.html',
})
export class CommentForumPage {
  forum={}
  comments:any
  commit:any
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider:CommentsForumsProvider) {
    this.forum = navParams.get("forum");
    this.comments=[]
    this.commit="";
    this.loadComments()
  }
  ionViewDidLoad() {
  }
  saveCommit(){
    let id=localStorage.getItem("idU");
    let json = {
      "comment_forum":this.commit,
      "user_id":id,
      "forum_id":this.forum["id"]
    }
    this.provider.postCommentsForum(json)
    .subscribe(
      (data)=>{
        this.comments.push(data);
      },
      (error)=>{console.log(error);}
    );
  }
  loadComments(){
    this.provider.getCommentsForum(this.forum["id"])
    .subscribe(
      (data)=>{
        this.comments = data;
      },
      (error)=>{console.log(error);}
    );
  }
}
