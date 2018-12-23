import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApi } from '../core/base-api';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { Post } from '../models/post.model';
import { LoadPosts, LoadUsers } from '../../redux/posts.action';
import { map, } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends BaseApi {

  constructor(public http: HttpClient, private store: Store<AppState>) {
    super(http);
  }

  randomRaiting() {
    return Math.floor(Math.random() * 11) - 5;
  }

  loadPosts() {
    let post = this.get(`posts`)
      .pipe(map(posts => {
        return posts.map(post => {
          post.raiting = this.randomRaiting();
          return post;
        })
      }))

    let user = this.get(`users`);

    const combinedProject = combineLatest(post, user)
      .subscribe(data => {
        this.store.dispatch(new LoadPosts(data[0]))
        this.store.dispatch(new LoadUsers(data[1]))
      })
  }
  // getPost(id: number){
  //   return this.get(`posts/${id}`);
  // }
  // getComment(id: number){
  //   return this.get(`comments/${id}`);
  // }

  getFullPost(id){
    let post = this.get(`posts/${id}`);
    let comment = this.get(`comments/?postId=${id}`);
    return combineLatest(post, comment);
  }

  getFullUser(id){
    let user = this.get(`users/${id}`);
    let posts = this.get(`posts/?userId?${id}`);
    return combineLatest(user, posts);
  }

}
