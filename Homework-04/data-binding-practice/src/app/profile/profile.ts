import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {
  count: number = 0;

  profileForm = new FormGroup({
    'name': new FormControl('Jingyi', Validators.required),
    'email': new FormControl('', Validators.required),
    'dateOfBirth': new FormControl('', Validators.required)
  })

  reset() {
    this.profileForm.reset();
  }

  save() {
    this.count++;
    console.log("profileForm: ", this.profileForm.value);
    console.log("name: ", this.profileForm.get('name')?.value);
    console.log("email: ", this.profileForm.get('email')?.value);
    console.log("dateOfBirth: ", this.profileForm.get('dateOfBirth')?.value);
    console.log("valid: ", this.profileForm);
  }
}
