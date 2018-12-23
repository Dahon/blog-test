export class Post {
    constructor(
        public userId: number,
        public id: number,
        public title: string,
        public body: string
    ){}
}

export interface Posts{
    posts: Post[]
}