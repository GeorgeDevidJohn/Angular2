import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { NavigationComponent } from '../navigation/navigation.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FormsModule,CommonModule,NavigationComponent],
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
    projectTitle : form.value.title,
    description:form.value.description,
    gitLink: form.value.gitLink,
    skills: form.value.skills,
    learningOutcomes: form.value.learningOutcomes,
    projectThumnail: form.value.projectThumnail
  };
  this.projects.push(project);

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

openProModal(){
  this.openModal = true;
}

getData(){
  return this.projects;
}
closeProModal(){
  this.clearProjectForm();
  this.openModal = false;
}


}