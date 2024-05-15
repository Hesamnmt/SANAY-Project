import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostCardComponent } from './post-card/post-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostComponent } from './post/post.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [PostCardComponent, PostComponent],
  imports: [CommonModule, PostsRoutingModule, SharedModule, MatGridListModule],
})
export class PostsModule {}
