import { IComment } from 'src/app/core/models/comments';
import { CommentService } from './../service/comment.service';
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/core/models/post';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SeePostDialogComponent } from './dialog/see-post-dialog/see-post-dialog.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  constructor(
    private commentService: CommentService,
    public dialog: MatDialog
  ) {}

  comments!: IComment[];
  postId: number = 1;
  postItem!: IPost;

  ngOnInit(): void {
    this.commentService.getComments().subscribe((res) => {
      this.comments = res;
      console.log(res);
    });
  }
  openPostDialog(postId: Number) {
    const dioalgConfig = new MatDialogConfig();
    dioalgConfig.width = '600px';
    dioalgConfig.height = '400px';
    dioalgConfig.data = postId;
    dioalgConfig.disableClose = true;
    const dialogRef = this.dialog.open(SeePostDialogComponent, dioalgConfig);
  }
}
