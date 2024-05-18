import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostCardComponent } from './post-card/post-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostComponent } from './post/post.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { SeePostDialogComponent } from './post-card/dialog/see-post-dialog/see-post-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [PostCardComponent, PostComponent, SeePostDialogComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    MatGridListModule,
    MatDialogModule,
  ],
})
export class PostsModule {}
