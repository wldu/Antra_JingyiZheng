import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: false,
  templateUrl: './register-form.html',
  styleUrl: './register-form.scss',
})
export class RegisterForm {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        username: ['', [Validators.minLength(3), Validators.required]],
        email: ['', [Validators.email]],
        password: ['', [Validators.minLength(6), Validators.required]],
        confirmPsw: ['', [Validators.minLength(6), Validators.required]],
        phoneNum: [''],
        preferredMethod: ['', Validators.required],
      },
      {
        validators: [this.comparePsw, this.contactMethodRequired],
      },
    );
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPsw() {
    return this.registerForm.get('confirmPsw');
  }

  get phoneNum() {
    return this.registerForm.get('phoneNum');
  }

  get preferredMethod() {
    return this.registerForm.get('preferredMethod');
  }

  comparePsw(group: AbstractControl): ValidationErrors | null {
    const psw = group.get('password');
    const confirmPsw = group.get('confirmPsw');
    const error: ValidationErrors = { notMatch: true };
    if (psw && confirmPsw && psw.value !== confirmPsw.value) {
      return error;
    } else {
      return null;
    }
  }

  contactMethodRequired(group: AbstractControl): ValidationErrors | null {
    const preferredMethod = group.get('preferredMethod')?.value;
    const email = group.get('email')?.value;
    const phone = group.get('phoneNum')?.value;

    if (preferredMethod === 'email' && !email) {
      return { emailRequired: true };
    }

    if (preferredMethod === 'phone' && !phone) {
      return { phoneRequired: true };
    }

    return null;
  }

  submit() {
    this.registerForm.reset();
  }
}
