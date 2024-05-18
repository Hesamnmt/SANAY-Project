import { CommentService } from './../../../service/comment.service';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IPost } from 'src/app/core/models/post';

@Component({
  selector: 'app-see-post-dialog',
  templateUrl: './see-post-dialog.component.html',
  styleUrls: ['./see-post-dialog.component.scss'],
})
export class SeePostDialogComponent {
  id = this.data;
  isResponseResived: boolean = false;
  postItem!: IPost;

  constructor(
    public dialogRef: MatDialogRef<SeePostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private commentService: CommentService
  ) {
    this.commentService.getPostbyId(this.id).subscribe((res) => {
      this.isResponseResived = true;
      this.postItem = res;
    });
  }
  onCloseButton() {
    this.dialogRef.close();
  }
}
