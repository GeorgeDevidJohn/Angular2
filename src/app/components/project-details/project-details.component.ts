import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [RouterLink,NavigationComponent],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {

}
