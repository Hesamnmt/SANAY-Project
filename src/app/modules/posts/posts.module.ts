import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostCardComponent } from './post-card/post-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [PostCardComponent, PostComponent],
  imports: [CommonModule, PostsRoutingModule, SharedModule],
})
export class PostsModule {}
