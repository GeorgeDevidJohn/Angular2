import { Component } from '@angular/core';
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
  selector: 'app-experiance',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './experiance.component.html',
  styleUrl: './experiance.component.css',
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
export class ExperianceComponent {
  openModal = false;
  experiences: any[] = [];
  position:string='';
  companyName:string='';
  address:string='';
  startDate:string='';
  endDate:string='';

  addQualification(form: NgForm){

    const experience = {
      position: form.value.position,
      companyName: form.value.companyName,
      address: form.value.address,
      startDate: form.value.startDate,
      endDate: form.value.endDate
    };
    this.experiences.push(experience);

    // Optionally, you can clear the form fields after submission
    this.clearQualificationForm();
    this.closeExpModal();
  }
  clearQualificationForm(){
    this.position ='';
    this.companyName ='';
    this.address ='';
    this.startDate ='';
    this.endDate ='';
  }

  getData(){
    return this.experiences;
  }
  openExpModal(){
    this.openModal = true;
  }
  closeExpModal(){
    this.clearQualificationForm();
    this.openModal = false;
  }
}
