import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  name: string = 'Jingyi';
  email: string = '';
  dateOfBirth: string = '';
  count: number = 0;

  reset() {
    this.name = '';
    this.email = '';
    this.dateOfBirth = '';
  }

  save() {
    console.log("name: ", this.name);
    console.log("email: ", this.email);
    console.log("dateofBirth: ", this.dateOfBirth);
    this.count++;
  }
}
