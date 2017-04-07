import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [PostService]
})
export class ChatComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
