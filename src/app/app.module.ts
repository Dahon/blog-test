import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { StoreModule } from '@ngrx/store';
import { PostsReducer } from './redux/posts.reducers';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { AuthorDetailComponent } from './posts/author-detail/author-detail.component';
import { PagerService } from './shared/services/pagination.service';
import { SearchPipe } from './shared/pipes/search.pipes';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    PostDetailComponent,
    AuthorDetailComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({postPage: PostsReducer})
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
