import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
import { CookieService } from 'ngx-cookie-service';
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
export class EducationComponent implements OnInit{
  startDate: any;
  resumeDetails: any;
  userId: string | undefined;
  constructor(private router: Router ,private _dataService: DataService,private cookieService: CookieService ) { }
  @Input() educationList : any;
  @Input() UserId : any;
  openModal = false;
  openEditEduModalValue = false;
  educations: any[] = [];
  qualification: string = '';
  college: string = '';
  address: string = '';
  // startDate: string = '';
  endDate: string = '';
  ngOnInit(): void {
    this.userId = this.UserId;
    console.log("this value:")
    if(this.educationList){
      console.log(this.educationList)
    this.onEdit();
    }
  }
  onEdit(){
    console.log(this.educationList)
    this.educations= this.educationList; 
  }
 

  
  addEducation(form: NgForm){
    this.closeEduModal()
    const education = {
      qualification: form.value.qualification,
      collegeName: form.value.collegeName,
      address: form.value.address,
      startDate: form.value.startDate,
      endDate:  form.value.endDate,
      userId :this.userId,
    };
  //  this.educations.push(education);
    this._dataService.addEducation(education).subscribe((data) => this.onEduEdit());
    // Optionally, you can clear the form fields after submission
    this.clearForm();
    this.closeEduModal();
    
  }

  eduForm = new FormGroup({  
    qualification : new FormControl('', [Validators.required]),
    college : new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    startDate: new FormControl( '', [Validators.required]),
    endDate: new FormControl(''),
    _id: new FormControl('')
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
    const dataToPatch = {
      _id: education._id,
      qualification: education.qualification,
      college: education.collegeName,
      address: education.address,
      startDate: this.formatDate(education.startDate), // Example date format (YYYY-MM-DD)
      endDate: this.formatDate(education.endDate) // Example date format (YYYY-MM-DD)
    };

    // Patch the values into the form
    this.eduForm.patchValue(dataToPatch);
  
    // this.eduForm.get('startDate').patchValue(this.formatDate(new Date()));
    // this.eduForm.patchValue({
    //   qualification: education.qualification,
    //   college: education.collegeName,
    //   address: education.address,
    //   startDate: education.startDate,
    //   endDate: education.endDate,
    // });
  }
    formatDate(dateString: string): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
 



  editEducation(){
    this.closeEduModal()
    const education = {
      _id: this.eduForm.value._id,
      qualification: this.eduForm.value.qualification,
      collegeName: this.eduForm.value.college,
      address: this.eduForm.value.address,
      startDate: this.eduForm.value.startDate,
      endDate: this.eduForm.value.endDate
    };
    this._dataService.updateEducation(education).subscribe((data) => this.onEduEdit());
   
    this.clearForm();
    this.closeEduModal();
  }

  onEduEdit(){
    { 
       const username = this.cookieService.get('urlName');
       this._dataService.getData(username).subscribe((data) => {
         
         if(data.status === 404){
           this.router.navigateByUrl('/pagenotfound');
         }{
         this.resumeDetails = data.data
         console.log("sample")
         this.educations= this.resumeDetails.educations;
         }   
       }); 
       
      
       //this.onPathchPersonalDetails(this.resumeDetails.customer)
       // This will log "george-devid" to the console
  }
  }
}
