import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/core/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() users!: IUser;
}
