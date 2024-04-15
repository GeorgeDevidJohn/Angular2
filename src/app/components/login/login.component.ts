import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {  FormsModule,
  NgForm,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators, } from '@angular/forms';
  import { RouterOutlet,RouterLink, Router } from '@angular/router';
import { AuthService, IAuth } from '../../service/auth.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-login',
  standalone: true,
  providers:[AuthService],
  imports: [FormsModule, ReactiveFormsModule,RouterOutlet,RouterLink,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginComponent {
  authToken: IAuth = { token: '' };

  errorMessage: string = '';

  constructor(private authService: AuthService,private router: Router) { }
 
  ngOnInit() {
  }
 


  loginform = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required]),
  });
 
  onSubmit() {
    this.authService
    .login(this.loginform.value.email!, this.loginform.value.password!)
    .subscribe({
      next: (token) => {
        console.log(token);
        // this.authToken = token;
        //localStorage.setItem('authtoken', token.token);
        this.router.navigateByUrl('/grocery');
      },
      error: (e) => {
        console.log(e.error.errors);
        this.errorMessage = e.error.errors;
      },
      complete: () => {
        console.info('complete');
      },
    });
   
  }
}
