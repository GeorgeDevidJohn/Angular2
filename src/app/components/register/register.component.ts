import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, Router } from '@angular/router';

import {  FormsModule,
  NgForm,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../../service/data.service';
@Component({
  selector: 'app-register',
  standalone: true,
  providers:[DataService],
  imports: [RouterOutlet,FormsModule,RouterLink, ReactiveFormsModule,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  errorMessage: string = '';
  constructor(private router: Router ,private _dataService: DataService) { }

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
   const resume = {
      "email": this.resgisterform.value.email!,
      "password": this.resgisterform.value.password!,
      "firstName": this.resgisterform.value.firstName!,
      "lastName": this.resgisterform.value.lastName!,
  
    }
    

    this._dataService.addRealUser(resume).subscribe(
      (data) => {
        console.log(data);
        this.errorMessage = "";
        this.router.navigateByUrl('/login');
      },
      (error) => {
        console.log(error);
        this.errorMessage = error.error.message;
        
      }
    );



    // this._dataService.addDetails(resume).subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.alldetails= [];
    //     // Handle response if needed
    //   },
    //   (error) => {
    //     console.error('Error:', error);
    //     // Handle error if needed
    //   }
    // );
  }
}
