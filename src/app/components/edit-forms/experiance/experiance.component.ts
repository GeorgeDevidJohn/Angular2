import { Component, Input } from '@angular/core';
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
  @Input() experienceList : any;
  @Input() UserId : any;
  resumeDetails: any;
  user_Id: any;
  constructor(private router: Router ,private _dataService: DataService) { }
  opemEditExpModalValue =false;
  openModal = false;
  experiences: any[] = [];
  position:string='';
  companyName:string='';
  companyaddress:string='';
  companystartDate:string='';
  companyendDate:string='';

  ngOnInit(): void {
    this.user_Id = this.UserId;
    console.log("this value:")
    if(this.experienceList){
      console.log(this.experienceList)
    this.onEdit();
    }
  }

  onEdit(){
    console.log(this.experienceList)
    this.experiences= this.experienceList; 
  }

  addQualification(form: NgForm){

    const experience = {
      position: form.value.position,
      companyName: form.value.companyName,
      address: form.value.companyaddress,
      startDate: form.value.companystartDate,
      endDate: form.value.companyendDate,
      userId  : this.user_Id
    };
    //this.experiences.push(experience);
    this._dataService.addExperience(experience).subscribe((data) => this.onExpEdit());
    
    // Optionally, you can clear the form fields after submission
    this.clearQualificationForm();
    this.closeExpModal();
  }

  expForm = new FormGroup({
    _id:new FormControl(''),
    position : new FormControl('', [Validators.required]),
    companyName : new FormControl('', [Validators.required]),
    companyaddress: new FormControl('', [Validators.required]),
    companystartDate: new FormControl('', [Validators.required]),
    companyendDate: new FormControl(''),
  });
  editQualification(){

    const experience = {
      _id: this.expForm.value._id,
      position: this.expForm.value.position,
      companyName: this.expForm.value.companyName,
      address: this.expForm.value.companyaddress,
      startDate: this.expForm.value.companystartDate,
      endDate: this.expForm.value.companyendDate
    };
    
    this._dataService.updateExperience(experience).subscribe((data) => this.onExpEdit());
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
      _id: experience._id,
      position: experience.position,
      companyName: experience.companyName,
      companyaddress: experience.address,
      companystartDate: this.formatDate(experience.startDate),
      companyendDate: this.formatDate(experience.endDate)
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  onExpEdit(){
    { 
       const username = "george-devid";
       this._dataService.getData(username).subscribe((data) => {
         
         if(data.status === 404){
           this.router.navigateByUrl('/pagenotfound');
         }{
         this.resumeDetails = data.data
         this.experiences= this.resumeDetails.experiences;
         }   
       }); 
       
       console.log(this.resumeDetails)
       //this.onPathchPersonalDetails(this.resumeDetails.customer)
       // This will log "george-devid" to the console
  }
  }
}
