import { Component } from '@angular/core';
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
  constructor(private router: Router ,private _dataService: DataService) { }
  openEditProjectModalValue = false;
  openModal = false;
  projects: any[] = [];
  description:string='';
  title:string='';
  gitLink:string='';
  skills:string='';
  learningOutcomes:string='';
  projectThumnail:string='';


addProjects( form: NgForm){

  const project = {
   title : form.value.title,
    description:form.value.description,
    gitLink: form.value.gitLink,
    skills: form.value.skills,
    learningOutcomes: form.value.learningOutcomes,
    projectThumnail: form.value.projectThumnail
  };
  this.projects.push(project);
  this._dataService.updateProjects(this.projects).subscribe((data) => console.log(data));
  // Optionally, you can clear the form fields after submission
  this.clearProjectForm();
  this.closeProModal();
}

editProjects(){



  const project = {
   title : this.projectForm.value.title,
    description:this.projectForm.value.description,
    gitLink: this.projectForm.value.gitLink,
    skills: this.projectForm.value.skills,
    learningOutcomes: this.projectForm.value.learningOutcomes,
    projectThumnail: this.projectForm.value.projectThumnail
  };

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
    title: project.title,
    gitLink: project.gitLink,
    skills: project.skills,
    description: project.description,
    learningOutcomes: project.learningOutcomes,
    projectThumnail: project.projectThumnail
  });
}

}