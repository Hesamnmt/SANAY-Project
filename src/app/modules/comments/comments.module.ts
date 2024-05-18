import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { SeePostDialogComponent } from './comments/dialog/see-post-dialog/see-post-dialog.component';

@NgModule({
  declarations: [CommentsComponent, SeePostDialogComponent],
  imports: [CommonModule, CommentsRoutingModule, SharedModule],
})
export class CommentsModule {}
