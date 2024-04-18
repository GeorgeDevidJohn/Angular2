import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule,
  NgForm,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,} from '@angular/forms'; // Import FormsModule
import { EducationComponent } from '../education/education.component';
import { ExperianceComponent } from '../experiance/experiance.component';
import { ProjectsComponent } from '../projects/projects.component';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-data-fill',
  standalone: true,
  providers:[DataService],
  imports: [CommonModule,FormsModule,EducationComponent,HttpClientModule,ExperianceComponent,ProjectsComponent,FormsModule, ReactiveFormsModule],
  templateUrl: './data-fill.component.html',
  styleUrl: './data-fill.component.css',
  animations: [
    trigger('slideIn', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in', style({ transform: 'translateX(0)' }))
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
export class DataFillComponent {
  valuePresnt: any;
  UrlNameTo: string | null | undefined;
  constructor(private router: Router ,private _dataService: DataService, private cookieService: CookieService ) { }
  @ViewChild('childRef')
  education!: EducationComponent;

  @ViewChild('childRefExp')
  experiance!: ExperianceComponent;

  @ViewChild('childRefProj')
  project!: ProjectsComponent;

  openstartModal = true;
  currentStep = 1;
  
  alldetails : any[] = [];
  educationList: any[] = [];
  projectsList: any[] = [];
  experianceList:any[] = [];
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
  personals: any[] = [];
  titleForm = new FormGroup({
    jobTitle : new FormControl('',[Validators.required])
  })
  title: string | null | undefined;
 
 
  
 
  ngOnInit() {
 const id = this.cookieService.get('userId');
  
    if(!id){
      this.router.navigateByUrl('/login');
    }
  }
 
  addFinal(){
    console.log("its the end")
    const theme = {
      url: this.themeForm.value.url,
      theam: this.themeForm.value.theme,      
    };
  const urlNameto = theme.url;
  const resume = {
    _id:  this.cookieService.get('userId'),
      phone: this.personals[0].phone,
      address: this.personals[0].address,
      email: this.personals[0].email,
      firstName: this.personals[0].firstName,
      lastName: this.personals[0].lastName,
      summary: this.personals[0].summary,
      skills: this.personals[0].skills,
      githubLink: this.personals[0].gitLink,
      linkdinLink: this.personals[0].linkedinLink,
      urlName: theme.url,
      title : this.title,
      themeColor: theme.theam,
      profilePicLink: "",
      educations: this.educationList,
      experiences: this.experianceList,
      projects: this.projectsList
    };
   
  
    console.log(resume)
   
    // Once alldetails is populated, you can call the service
    this._dataService.addDetails(resume).subscribe(
      (data) => {

        console.log(data);
        this.alldetails= [];
        if(urlNameto){
        this.cookieService.set('urlName',urlNameto );
      }
        this.router.navigateByUrl('/edit');
      },
      (error) => {
        console.error('Error:', error);
        // Handle error if needed
      }
    );
  
  }
  addPersonal(){

    const personal = {
      _id:  this.cookieService.get('userId'),
      firstName: this.personalForm.value.firstName,
      lastName: this.personalForm.value.lastName,
      summary: this.personalForm.value.summary,
      phone: this.personalForm.value.phone,
      skills: this.personalForm.value.skills,
      email: this.personalForm.value.email,
      gitLink: this.personalForm.value.gitLink,
      linkedinLink: this.personalForm.value.linkedinLink,
      address: this.personalForm.value.address,
      profilePicture: this.personalForm.value.profilePicture
    };
    this.personals.push(personal);
    this.scrollToTop();
    this.nextStep() 
    // Optionally, you can clear the form fields after submission
     
  }

  fillInput(value: string) {
    this.titleForm.get('jobTitle')?.setValue(value);
  }

  themeForm = new FormGroup({
    url : new FormControl('', [Validators.required]),
    theme : new FormControl('', [Validators.required]),
   })
 

  nextStep() {
    this.currentStep ++;
  }


edunextStep() {
  this.educationList = this.education.getData();
  this.currentStep ++;
}

expnextStep(){
  this.experianceList = this.experiance.getData();
  this.currentStep ++;
}

pronextStep(){
  this.projectsList = this.project.getData();
  console.log(this.projectsList)
  this.currentStep ++;
}
  previousStep() {
    if(this.currentStep >0){
    this.currentStep--;
    }
  }

  addTitle(){
  this.title =  this.titleForm.value.jobTitle;

  this.openstartModal = false;
  }

  saveEducation($event : any){
    console.log($event)

  }
  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }

  onInputChange(event:any){
    const value = (event.target as HTMLInputElement).value;
    console.log(value)
    this._dataService.urlChecker(value).subscribe(
      (data) => {
        console.log(data);
        this.valuePresnt = data.exists;
        // Handle response if needed
      },
      (error) => {
        console.error('Error:', error);
        // Handle error if needed
      }
    );
  }
}
