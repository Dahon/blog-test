import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { AuthorDetailComponent } from './posts/author-detail/author-detail.component';

const appRoutes: Routes = [
    { path: '', component: PostsComponent },
    { path: 'post/:id', component: PostDetailComponent },
    { path: 'author/:id', component: AuthorDetailComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
