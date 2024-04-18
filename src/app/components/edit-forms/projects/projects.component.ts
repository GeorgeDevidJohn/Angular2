import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
 } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { Router } from '@angular/router';
import { DataService } from '../../../service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { EditProjectComponent } from '../../edit-project/edit-project.component';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-projects',
  standalone: true,
  providers:[DataService],
  imports: [FormsModule,CommonModule,HttpClientModule,ReactiveFormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
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
export class ProjectsComponent {
  @Input() projectList : any;
  @Input() UserId : any;
  resumeDetails: any;
  user_id: any;
  constructor(private router: Router ,private _dataService: DataService, private _parent: EditProjectComponent,private cookieService: CookieService ) { }
  openEditProjectModalValue = false;
  openModal = false;
  projects: any[] = [];
  description:string='';
  title:string='';
  gitLink:string='';
  skills:string='';
  learningOutcomes:string='';
  projectThumnail:string='';
  ngOnInit(): void {
    this.user_id = this.UserId;
    console.log("this value:")
    if(this.projectList){
      console.log(this.projectList)
    this.onEdit();
    }
  }

  onEdit(){
    console.log(this.projectList)
    this.projects= this.projectList; 
  }

addProjects( form: NgForm){

  const project = {
    _id: form.value._id,
   projectTitle : form.value.title,
    description:form.value.description,
    githubLink: form.value.gitLink,
    skills: form.value.skills,
    learningOutcomes: form.value.learningOutcomes,
    userId  : this.user_id    
  };
  
  this._dataService.addProjects(project).subscribe((data) => this.onProjectEdit());
  // Optionally, you can clear the form fields after submission
  this.clearProjectForm();
  this.closeProModal();
}

editProjects(){
  const project = {
    _id: this.projectForm.value._id,
    projectTitle : this.projectForm.value.title,
    description:this.projectForm.value.description,
    githubLink: this.projectForm.value.gitLink,
    skills: this.projectForm.value.skills,
    learningOutcomes: this.projectForm.value.learningOutcomes,
  };

  this._dataService.updateProjects(project).subscribe((data) =>  this.onProjectEdit());
  
  // Optionally, you can clear the form fields after submission
  this.clearProjectForm();
  this.closeProModal();
}

clearProjectForm(){
  this.title ='';
  this.gitLink ='';
  this.skills ='';
  this.description='';
  this.learningOutcomes ='';
  this.projectThumnail ='';
}

projectForm = new FormGroup({
  _id: new FormControl(''),
  title : new FormControl('', [Validators.required]),
  gitLink : new FormControl(''),
  skills: new FormControl('', [Validators.required]),
  description: new FormControl('', [Validators.required]),
  learningOutcomes: new FormControl(''),
  projectThumnail: new FormControl(''),
});
openProModal(){
  this.openModal = true;
}
closeProModal(){
  this.clearProjectForm();
  this.openModal = false;
  this.openEditProjectModalValue = false;
}
openEditProjectModal(project : any){
  this.patchProjForm(project)
  this.openEditProjectModalValue = true;

}

patchProjForm(project :any ){
  this.projectForm.patchValue({
    _id:project._id,
    title: project.projectTitle,
    gitLink: project.githubLink,
    skills: project.skills,
    description: project.description,
    learningOutcomes: project.learningOutcomes,
    projectThumnail: project.project_pic
  });
}
reloadComponent() {
  console.log("reload ")
  this.router.navigateByUrl('/edit', { skipLocationChange: true })
}
onProjectEdit(){
  { 
     const username = this.cookieService.get('urlName');
     this._dataService.getData(username).subscribe((data) => {
       
       if(data.status === 404){
         this.router.navigateByUrl('/pagenotfound');
       }{
       this.resumeDetails = data.data
       this.projects= this.resumeDetails.projects;
       }   
     }); 
     
     console.log(this.resumeDetails)
     //this.onPathchPersonalDetails(this.resumeDetails.customer)
     // This will log "george-devid" to the console
}
}

}