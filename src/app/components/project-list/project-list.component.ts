import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Only import Router from '@angular/router'
import { NavigationComponent } from '../navigation/navigation.component';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports:[NavigationComponent],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'] // Correct the property name to 'styleUrls'
})
export class ProjectListComponent {

  constructor(private router: Router) { } // Correct the constructor spelling
  
  onViewProjectDetails() {
    this.router.navigateByUrl('/projectdetail/sdhadh');
  } 
}
