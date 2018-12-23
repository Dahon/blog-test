import { Action } from '@ngrx/store';
import { Post } from '../shared/models/post.model';
import { User } from '../shared/models/user.model';

export namespace POST_ACTION{
    export const LOAD_POSTS = 'LOAD_POSTS';
    export const LOAD_USERS = 'LOAD_USERS';
    export const LIKE_POST = 'LIKE_POST';
    export const DISLIKE_POST = 'DISLIKE_POST';
}

export class LoadPosts implements Action{
    readonly type = POST_ACTION.LOAD_POSTS;
    constructor(public payload: Post[]){}
}

export class LoadUsers implements Action{
    readonly type = POST_ACTION.LOAD_USERS;
    constructor(public payload: User[]){}
}

export class LikePost implements Action{
    readonly type = POST_ACTION.LIKE_POST;
    constructor(public payload: Post){}
}

export class DisLikePost implements Action{
    readonly type = POST_ACTION.DISLIKE_POST;
    constructor(public payload: Post){}
}

export type PostsAction = LoadPosts | LoadUsers | LikePost | DisLikePost;


