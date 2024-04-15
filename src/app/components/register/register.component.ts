import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, Router } from '@angular/router';

import {  FormsModule,
  NgForm,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators, } from '@angular/forms';
import { AuthService, IAuth } from '../../service/auth.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-register',
  standalone: true,
  providers:[AuthService],
  imports: [RouterOutlet,FormsModule,RouterLink, ReactiveFormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  authToken: IAuth = { token: '' };
  errorMessage: string = '';
  constructor(private authService: AuthService, private router: Router) {}
  resgisterform = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required]),
    confirmPassword: new FormControl('', [
        Validators.required]),
  });
  
  onSubmit() {
    this.authService
    .register(
      this.resgisterform.value.firstName!,
      this.resgisterform.value.lastName!,
      this.resgisterform.value.email!,
      this.resgisterform.value.password!
    )
    .subscribe({
      next: (token) => {
        console.log(token);
        // this.authToken = token;
        //localStorage.setItem('authtoken', token.token);
        this.router.navigateByUrl('/edit');
      },
      error: (e) => {
        console.log(e.error.errors);
        this.errorMessage = e.error.errors[0].msg;
      },
      complete: () => {
        console.info('complete');
      },
    });
  }
}
