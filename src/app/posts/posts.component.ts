import { Component, OnInit } from '@angular/core';
import { Posts, Post } from '../shared/models/post.model';
import { Observable } from 'rxjs';
import { AppState } from '../redux/app.state';
import { Store } from '@ngrx/store';
import { PostsService } from '../shared/services/posts.service';
import { User } from '../shared/models/user.model';
import { PagerService } from '../shared/services/pagination.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public postState: Observable<any>
  public users: User[];
  public posts: Post[] = [];
  pager: any = {};
  pagedItems: any[];
  query:string = '';

  constructor(private store: Store<AppState>, private service: PostsService, private pagerService: PagerService){}

  ngOnInit() {
    this.postState = this.store.select('postPage');
    
    this.postState.subscribe(data=>{
      if(!data.posts.length) this.service.loadPosts();
      if(data.users) this.users = data.users;
      this.posts = data.posts;
      this.setPage(1);
    })
  }

  setPage(page: number) {
    console.log(page)
    // get pager object from service
    this.pager = this.pagerService.getPager(this.posts.length, page);
    // get current page of items
    console.log(this.pager)
    this.pagedItems = this.posts.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
