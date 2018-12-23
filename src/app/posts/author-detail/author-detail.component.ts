import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostsService } from '../../shared/services/posts.service';
import { Subscription } from 'rxjs';
import { Post } from '../../shared/models/post.model';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss']
})
export class AuthorDetailComponent implements OnInit {
  dataRemote: Subscription;
  posts: Post[];
  user: User;

  constructor(private route: ActivatedRoute, private service: PostsService) { }

  ngOnInit() {
    this.dataRemote = this.route.params
    .subscribe((params: Params) => {
      this.service.getFullUser(params['id'])
        .subscribe(data => {
          this.user = data[0];
          this.posts = data[1];
        })
    })
  }

}
