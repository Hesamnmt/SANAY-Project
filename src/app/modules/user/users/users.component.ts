import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { IUser } from 'src/app/core/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];

  constructor(private service: UserService) {}
  ngOnInit(): void {
    this.service.getUsers().subscribe((res) => {
      console.log(res);
      this.users = res;
    });
  }
}
