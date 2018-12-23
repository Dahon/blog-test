import { Post } from '../shared/models/post.model';
import { User } from '../shared/models/user.model';

export interface AppState{
    postPage: {
        posts: Post[],
        users: User[]
    }    
}


