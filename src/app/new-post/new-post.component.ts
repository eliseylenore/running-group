import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';



@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent{
  newPost: Post;
  constructor(private postService: PostService, private router: Router) { }

  submitForm(author: string, text: string) {
    this.newPost = new Post(author, text);
    this.postService.addPost(this.newPost);
  }

}
