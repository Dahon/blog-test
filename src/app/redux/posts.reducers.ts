import { POST_ACTION, PostsAction } from './posts.action';

const initialState = {
    posts: []
  }

export function PostsReducer(state = initialState, action: PostsAction){
    switch(action.type){
        case POST_ACTION.LOAD_POSTS:
            return{
                ...state,
                posts: [...action.payload]
            }
        case POST_ACTION.LIKE_POST:
            const idxLike: number = state.posts.findIndex(c=> c.id === action.payload.id);
            state.posts[idxLike].raiting += 1;
            return{
                ...state,
                posts: [...state.posts]
            }
        case POST_ACTION.DISLIKE_POST:
            const idxDisLike: number = state.posts.findIndex(c=> c.id === action.payload.id);
            state.posts[idxDisLike].raiting -= 1;
            return{
                ...state,
                posts: [...state.posts]
            }
        case POST_ACTION.LOAD_USERS:
            return{
                ...state,
                users: [...action.payload]
            }
        default: 
            return state
    }
}