import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFireDatabase) {
    this.posts = angularFire.list('posts');
  }

  getPosts() {
    return this.posts;
  }

  addPost(postToBeSaved) {
    this.posts.push(postToBeSaved);
  }

}
