import { IPost } from 'src/app/core/models/post';
import { PostsService } from './../service/posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  postes: IPost[] = [];

  constructor(private postServise: PostsService) {}

  ngOnInit(): void {
    console.log('postComponent');
    this.postServise.getPost().subscribe((res) => {
      console.log(res);
      this.postes = res;
    });
  }
}
