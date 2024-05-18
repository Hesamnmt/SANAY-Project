import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/core/models/post';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SeePostDialogComponent } from './dialog/see-post-dialog/see-post-dialog.component';
import { DialogConfig } from '@angular/cdk/dialog';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
  @Input() post!: IPost;

  constructor(public dialog: MatDialog) {}

  seePost(item: IPost) {
    const dioalgConfig = new MatDialogConfig();
    dioalgConfig.width = '600px';
    dioalgConfig.height = '400px';
    dioalgConfig.data = item;
    const dialogRef = this.dialog.open(SeePostDialogComponent, dioalgConfig);
  }
}
