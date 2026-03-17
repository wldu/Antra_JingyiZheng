import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface UserItem {
  id: number;
  name: string;
  email: string;
  address: AddressItem;
  phone: string;
  website: string;
  company: CompanyItem;
  isFavorite: boolean;
}

export interface AddressItem {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoItem;
}

export interface GeoItem {
  lat: string;
  lng: string;
}

export interface CompanyItem {
  name: string;
  catchPhrase: string;
  bs: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users';
  private favoriteList: UserItem[] = [];
  favorite = new BehaviorSubject<UserItem[]>(this.favoriteList);

  constructor(private http: HttpClient) {}

  getUserList(): Observable<UserItem[]> {
    return this.http.get<UserItem[]>(this.url);
  }

  addToFavoriteList(user: UserItem) {
    this.favoriteList.push(user);
    this.favorite.next(this.favoriteList);
  }

  removeFromFavoriteList(id: number) {
    const updatedList = this.favoriteList.filter((item) => item.id !== id);
    this.favorite.next(updatedList);
    this.favoriteList = updatedList;
  }
}
