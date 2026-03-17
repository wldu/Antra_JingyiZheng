import { Component, OnInit } from '@angular/core';
import { UserItem, UserService } from '../services/user-service';
import { User } from '../user/user';

@Component({
  selector: 'app-favorite',
  standalone: false,
  templateUrl: './favorite.html',
  styleUrl: './favorite.scss',
})
export class Favorite implements OnInit {
  favoriteUserList: UserItem[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.favorite.subscribe((res) => {
      this.favoriteUserList = res;
    });
  }
}
