import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';
import { FormsModule,
  NgForm,
  ReactiveFormsModule,
 } from '@angular/forms';
import { Component } from '@angular/core';
import { trigger, transition, animate, keyframes, style, state } from '@angular/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EducationComponent } from '../edit-forms/education/education.component';
import { ProjectsComponent } from '../edit-forms/projects/projects.component';
import { ExperianceComponent } from '../edit-forms/experiance/experiance.component';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { UrlStorageService } from '../../url-storage-service.service';
import { AuthService } from '../../service/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-edit-project',
  standalone: true,
  providers:[DataService],
  imports: [CommonModule,HttpClientModule,FormsModule,EducationComponent,ExperianceComponent,ProjectsComponent,FormsModule, ReactiveFormsModule,ColorPickerModule],
  templateUrl: './edit-project.component.html',
  styleUrl: './edit-project.component.css',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  animations: [
    trigger('slideIn', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in', style({ transform: 'translateX(0)' }))
      ]),
      transition('* => void', [
        animate('500ms ease-out', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('slideUpAnimation', [
      transition('void => *', [
        style({ transform: 'translateY(100%)' }),
        animate('1000ms ease-in', style({ transform: 'translateY(0)' }))
      ]),
      transition('* => void', [
        animate('1000ms ease-out', style({ transform: 'translateY(-100%)' }))
      ])
    ]),
   
  
    trigger('bounceIn', [
      transition('void => *', [
        animate(1000, keyframes([
          style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0 }),
          style({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }),
          style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.4 }),
          style({ transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6 }),
          style({ transform: 'scale3d(0.97, 0.97, 0.97)', offset: 0.8 }),
          style({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 }),
        ]))
      ])
    ]),
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
    ]),
    trigger('bounceIn600', [
      transition('void => *', [
        animate(600, keyframes([
          style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0 }),
          style({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }),
          style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.4 }),
          style({ transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6 }),
          style({ transform: 'scale3d(0.97, 0.97, 0.97)', offset: 0.8 }),
          style({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 }),
        ]))
      ])
    ]),
    trigger('bounceIn700', [
      transition('void => *', [
        animate(700, keyframes([
          style({ opacity: 0, transform: 'scale3d(0.3, 0.3, 0.3)', offset: 0 }),
          style({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }),
          style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.4 }),
          style({ transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6 }),
          style({ transform: 'scale3d(0.97, 0.97, 0.97)', offset: 0.8 }),
          style({ opacity: 1, transform: 'scale3d(1, 1, 1)', offset: 1 }),
        ]))
      ])
    ]),
    ,
    trigger('bounceIn500', [
      transition('void => *', [
        animate(500, keyframes([
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
export class EditProjectComponent {
  resumeDetails: any;
  educationdetails: any;
  experience: any;
  project: any;
  userId: any;
  constructor(private router: Router ,
    private _dataService: DataService ,
    private urlService: UrlStorageService, private _auth: AuthService,private cookieService: CookieService 
    ) { this.onEdit()};
    
    
  showNav = false;
  setCurrentSection = 1;
  showDiv = true;
  openSide(){
    this.showNav = !this.showNav;
  }
  valueSide(num: number){
   this.setCurrentSection = num;
    this.showNav = false;
  }

  hideDiv(){
    this.showDiv = false;
  }
  personalForm = new FormGroup({
    lastName : new FormControl('', [Validators.required]),
    firstName : new FormControl('', [Validators.required]),
    summary: new FormControl('', [Validators.required]),
    phone: new FormControl<number | null>(null, [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email] ),
    gitLink: new FormControl(''),
    skills: new FormControl('', [Validators.required]),
    address: new FormControl(''),
    linkedinLink: new FormControl(''),
    profilePicture: new FormControl(null),
  });

  themeForm = new FormGroup({
    _id: new FormControl(''),
   url : new FormControl('', [Validators.required]),
   theme : new FormControl('', [Validators.required]),
  })

 
onEdit(){
   { 

    const urlName =  this.cookieService.get('urlName');
    const id =  this.cookieService.get('userId');
    if(!urlName || !id){
      this.router.navigateByUrl('/login');
    }

      const username = urlName;
      this._dataService.getData(username).subscribe((data) => {
        
        if(data.status === 404){
          this.router.navigateByUrl('/login');
        }{
        this.resumeDetails = data.data
        console.log(this.resumeDetails.educations)
        this.educationdetails = this.resumeDetails.educations
        this.experience = this.resumeDetails.experiences
        this.project = this.resumeDetails.projects
        this.userId = this.resumeDetails.customer._id;
        this.patchValueToTheme(this.resumeDetails.customer);
        this.onPathchPersonalDetails(this.resumeDetails.customer)
        }   
      }); 
      
      console.log(this.resumeDetails)
      //this.onPathchPersonalDetails(this.resumeDetails.customer)
      // This will log "george-devid" to the console
}
}
signOut(){
  this._auth.logout()
  this.router.navigateByUrl('/login');
}
onPathchPersonalDetails(customer :any ){
  
  this.personalForm.patchValue({
    lastName : customer.lastName,
    firstName : customer.firstName,
    summary: customer.summary,
    phone: customer.phone,
    email: customer.email,
    linkedinLink:customer.linkdinLink,
    gitLink: customer.githubLink,
    skills: customer.skills,
    address: customer.address,
  
  });
}
  addPersonal(){
    const personal = {
      _id: this.resumeDetails.customer._id,
      firstName: this.personalForm.value.firstName,
      lastName: this.personalForm.value.lastName,
      summary: this.personalForm.value.summary,
      phone: this.personalForm.value.phone,
      skills: this.personalForm.value.skills,
      email: this.personalForm.value.email,
      githubLink: this.personalForm.value.gitLink,
      linkedinLink: this.personalForm.value.linkedinLink,
      address: this.personalForm.value.address,
      profilePicture: this.personalForm.value.profilePicture
    };
   
    this._dataService.updatePersonals(personal).subscribe((data) => this.onEdit());
    this.onEdit()
    // Optionally, you can clear the form fields after submission
     
  }

  editFinal(){
    const theme = {
      _id: this.themeForm.value._id,
      url: this.themeForm.value.url,
      themeColor: this.themeForm.value.theme,
      
    };
    this._dataService.updatePersonals(theme).subscribe((data) =>   this.onEdit());
    
    
   console.log(theme)
   // this._dataService.updateTheme(theme).subscribe((data) => console.log(data));

  }

  patchValueToTheme(data:any){
    // this.themeForm = new FormGroup({
    //   url: new FormControl({ value: '', disabled: true }) // Initialize the form control with disabled status
    // });
    
    console.log(data)
    this.themeForm.patchValue({
      _id:data._id,
      url:data.urlName,
      theme: data.themeColor
    });
  }
 

}
