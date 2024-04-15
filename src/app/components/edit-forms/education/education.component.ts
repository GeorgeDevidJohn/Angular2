import { Component, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import {
  NgForm,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../../service/data.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-education',
  standalone: true,
  providers:[DataService],
  imports: [FormsModule,CommonModule,HttpClientModule,ReactiveFormsModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
  animations: [
 
  
    trigger('bounceIn800', [
      transition('void => *', [
        animate(800, keyframes([
          style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0 }),
          style({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }),
          style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.4 }),
          style({ transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6 }),
          style({ transform: 'scale3d(0.97, 0.97, 0.97)', offset: 0.8 }),
          style({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 }),
        ]))
      ])
    ])   
  ]
})
export class EducationComponent {
  constructor(private router: Router ,private _dataService: DataService) { }
  openModal = false;
  openEditEduModalValue = false;
  educations: any[] = [];
  qualification: string = '';
  college: string = '';
  address: string = '';
  startDate: string = '';
  endDate: string = '';

  addEducation(form: NgForm){
    this.closeEduModal()
    const education = {
      qualification: form.value.qualification,
      college: form.value.college,
      address: form.value.address,
      startDate: form.value.startDate,
      endDate: this.endDate
    };
    this.educations.push(education);
    this._dataService.updateEducation(this.educations).subscribe((data) => console.log(data));
    // Optionally, you can clear the form fields after submission
    this.clearForm();
    this.closeEduModal();
    
  }

  eduForm = new FormGroup({
    qualification : new FormControl('', [Validators.required]),
    college : new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl(''),
  });

  clearForm() {
    this.qualification = '';
    this.college = '';
    this.address = '';
    this.startDate = '';
    this.endDate = '';
  }
  openEduModal(){
    this.openModal = true;
  }
  closeEduModal(){
    this.clearForm(); 
    this.openModal = false;
    this.openEditEduModalValue = false;
  }


  openEditEduModal(education: any){
    this.patchEducationForm(education);
    this.openEditEduModalValue = true;
  }


  patchEducationForm(education :any ){
    this.eduForm.patchValue({
      qualification: education.qualification,
      college: education.college,
      address: education.address,
      startDate: education.startDate,
      endDate: education.endDate,
    });
  }

  editEducation(){
    this.closeEduModal()
    const education = {
      qualification: this.eduForm.value.qualification,
      college: this.eduForm.value.college,
      address: this.eduForm.value.address,
      startDate: this.eduForm.value.startDate,
      endDate: this.eduForm.value.endDate
    };
    
    // Optionally, you can clear the form fields after submission
    this.clearForm();
    this.closeEduModal();
  }
}
