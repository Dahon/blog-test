import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
import { User } from 'src/app/shared/models/user.model';
import { AppState } from '../../redux/app.state';
import { Store } from '@ngrx/store';
import { LikePost, DisLikePost } from '../../redux/posts.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Input() users: User[];
  author: User;
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.author = this.users.find((user: User)=>{
      return user.id == this.post.userId;
    });
  }

  like(){
    this.store.dispatch(new LikePost(this.post));
    return false;
  }

  dislike(){
    this.store.dispatch(new DisLikePost(this.post));
    return false;
  }

}
