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
import { Router } from '@angular/router';
import { DataService } from '../../../service/data.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-experiance',
  standalone: true,
  providers:[DataService],
  imports: [FormsModule,CommonModule,HttpClientModule,ReactiveFormsModule],
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
  constructor(private router: Router ,private _dataService: DataService) { }
  opemEditExpModalValue =false;
  openModal = false;
  experiences: any[] = [];
  position:string='';
  companyName:string='';
  companyaddress:string='';
  companystartDate:string='';
  companyendDate:string='';

  addQualification(form: NgForm){

    const experience = {
      position: form.value.position,
      companyName: form.value.companyName,
      companyaddress: form.value.companyaddress,
      companystartDate: form.value.companystartDate,
      companyendDate: form.value.companyendDate
    };
    this.experiences.push(experience);
    this._dataService.updateExperience(this.experiences).subscribe((data) => console.log(data));
    // Optionally, you can clear the form fields after submission
    this.clearQualificationForm();
    this.closeExpModal();
  }

  expForm = new FormGroup({
    position : new FormControl('', [Validators.required]),
    companyName : new FormControl('', [Validators.required]),
    companyaddress: new FormControl('', [Validators.required]),
    companystartDate: new FormControl('', [Validators.required]),
    companyendDate: new FormControl(''),
  });
  editQualification(){

    const experience = {
      position: this.expForm.value.position,
      companyName: this.expForm.value.companyName,
      companyaddress: this.expForm.value.companyaddress,
      companystartDate: this.expForm.value.companystartDate,
      companyendDate: this.expForm.value.companyendDate
    };
    

    // Optionally, you can clear the form fields after submission
    this.clearQualificationForm();
    this.closeExpModal();
  }
  clearQualificationForm(){
    this.position ='';
    this.companyName ='';
    this.companyaddress ='';
    this.companystartDate ='';
    this.companyendDate ='';
  }

  openExpModal(){
    this.openModal = true;
  }
  closeExpModal(){
    this.clearQualificationForm();
    this.openModal = false;
    this.opemEditExpModalValue = false;
  }
  openEditExpModal(experience : any){

    this.patchExpForm(experience)
    this.opemEditExpModalValue = true;
  }

  patchExpForm(experience :any ){
    this.expForm.patchValue({
      position: experience.position,
      companyName: experience.companyName,
      companyaddress: experience.companyaddress,
      companystartDate: experience.companystartDate,
      companyendDate: experience.companyendDate
    });
  }
}
