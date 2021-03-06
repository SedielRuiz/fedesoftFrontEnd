import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommentsForumsProvider } from '../../providers/comments-forums/comments-forums';
import { ProviderUsersProvider, Group } from '../../providers/provider-users/provider-users';
import { LoadingController } from 'ionic-angular';

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
  users:any
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public provider:CommentsForumsProvider, 
    public providerUser:ProviderUsersProvider, 
    public loadingCtrl: LoadingController
  ) {
    this.forum = navParams.get("forum");
    this.comments=[]
    this.commit="";
    this.loadUsers()
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
        this.commit="";
      },
      (error)=>{console.log(error);}
    );
  }
  loadUsers(){
    this.providerUser.getUsers()
    .subscribe(
      (data)=>{
        this.users = data;
      },
      (error)=>{console.log(error);}
    );
  }
  loadComments(){
    this.provider.getCommentsForum(this.forum["id"])
    .subscribe(
      (data)=>{
        let loading = this.loadingCtrl.create({
          content: '<ion-spinner name="bubbles"></ion-spinner>Espere un momento por favor'
        });
        loading.present();
        this.comments = data;
        loading.dismiss();  
      },
      (error)=>{console.log(error);}
    );
  }
}
