import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {  FormsModule,
  NgForm,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators, } from '@angular/forms';
  import { RouterOutlet,RouterLink, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../service/data.service';
import { CookieService } from 'ngx-cookie-service';
import { UrlStorageService } from '../../url-storage-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  providers:[DataService,CookieService],
  imports: [FormsModule, ReactiveFormsModule,RouterOutlet,RouterLink,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginComponent {
  // authToken: IAuth = { token: '' };
  myStoredData: any;

  errorMessage: string = '';

  constructor(private authService: DataService,
    private router: Router,
    private cookieService: CookieService,
    private urlStorageService: UrlStorageService
  
  ) { }
 
  ngOnInit() {
  }
 
 

  loginform = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required]),
  });
  
   

  onSubmit() {
   const resume1 = {
      email: this.loginform!.value.email!,
      password: this.loginform!.value.password!
    };
   
  
    this.authService
    .addUser(resume1).
    subscribe(
      (data) => {
        console.log(data);
        // this.alldetails= [];
        // Handle response if needed
        const myCookieValue = this.cookieService.get('urlName');
        this.myStoredData = myCookieValue;
        console.log(myCookieValue);
        if (data && data.success) {
          const id = data.data.id;
          // Save the id to a cookie
          this.cookieService.set('userId', id);
          
          // Proceed with other logic (navigation, etc.)
        }
        if (data && data.success && data.data && data.data.isUrl) {
          // isUrl is true, perform actions accordingly
          console.log('isUrl is true');
          this.router.navigateByUrl('/edit');
          this.urlStorageService.setUrlName(data.data.urlName);
          this.urlStorageService.setUserId(data.data.userId);
          // Handle response if needed
        } else {
          // isUrl is false or not present, perform actions accordingly
          console.log('isUrl is false or not present');
          this.router.navigateByUrl('/data');
          // Handle response if needed
        }
      },
      (error) => {
        console.error('Error:', error);
        console.log(error.error);
        
        this.errorMessage = error.error.error;
      }
    );
  




    // this.authService
    // .loginDetails(this.resume1)
    // .subscribe({
    //   next: (token) => {
    //     console.log(token);
    //     // this.authToken = token;
    //     //localStorage.setItem('authtoken', token.token);
    //     this.router.navigateByUrl('/grocery');
    //   },
    //   error: (e) => {
    //     console.log(e.error);
    //     this.errorMessage = e.error.errors;
    //   },
    //   complete: () => {
    //     console.info('complete');
    //   },
    // });
   
  }
}
