import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from '../../shared/services/posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../../shared/models/post.model';
import { AppState } from '../../redux/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  dataRemote: Subscription;
  post: Post;
  comments;
  constructor(private route: ActivatedRoute, private service: PostsService, private store: Store<AppState>) { }
  ngOnInit() {
    this.dataRemote = this.route.params
      .subscribe((params: Params) => {
        this.service.getFullPost(params['id'])
          .subscribe(data => {
            this.post = data[0];
            this.comments = data[1];
          })
      })
  }

  ngOnDestroy() {
    this.dataRemote.unsubscribe();
  }

}
