import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './users/users.component';
import { UserCardComponent } from './user-card/user-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UsersComponent, UserCardComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule],
})
export class UserModule {}
