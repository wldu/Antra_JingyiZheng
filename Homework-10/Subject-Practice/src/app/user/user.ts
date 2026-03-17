import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserItem, UserService } from '../services/user-service';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User implements OnInit {
  userList: UserItem[] = [];
  completeList: UserItem[] = [];
  searchControl = new FormControl('');
  private searchSub?: Subscription;

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.userService.getUserList().subscribe((res) => {
      console.log('res: ', res);
      this.userList = res.map((item) => {
        return {
          ...item,
          isFavorite: false,
        };
      });
      this.completeList = this.userList;
      this.cdr.detectChanges();
    });

    this.searchSub = this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        filter((val: string | null) => val !== null),
      )
      .subscribe((val: string) => {
        console.log('val: ', val);
        const updatedUserList = this.completeList.filter((item) => {
          return item.name?.toLowerCase().includes(val.toLowerCase());
        });
        this.userList = updatedUserList;
        this.cdr.detectChanges();
      });
  }

  addToFavorite(user: UserItem) {
    this.userService.addToFavoriteList(user);
    user.isFavorite = true;
  }

  removeFromFavorite(user: UserItem) {
    this.userService.removeFromFavoriteList(user.id);
    user.isFavorite = false;
  }
}
