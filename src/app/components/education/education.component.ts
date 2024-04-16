import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
@Component({
  selector: 'app-education',
  standalone: true,
  imports: [FormsModule,CommonModule],
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
export class EducationComponent  {
  
  @Output() addEdu: EventEmitter<any> =
  new EventEmitter<any>();
  openModal = false;
  educations: any[] = [];
  qualification: string = '';
  collegeName: string = '';
  address: string = '';
  startDate: string = '';
  endDate: string = '';

  
 
  
 
  addEducation(form: NgForm){
    this.closeEduModal()
    const education = {
      qualification: form.value.qualification,
      collegeName: form.value.collegeName,
      address: form.value.address,
      startDate: form.value.startDate,
      endDate: form.value.endDate
    };
    this.educations.push(education);
   
    // Optionally, you can clear the form fields after submission
    this.clearForm();
    this.closeEduModal();
  }

  clearForm() {
    this.qualification = '';
    this.collegeName = '';
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
  }
  getData(){
    return this.educations;
  }
  emitFunction() {
    this.addEdu.emit(this.educations);
  }
}
