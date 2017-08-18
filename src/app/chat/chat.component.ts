import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [PostService]
})
export class ChatComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }

}
