import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import dataSript from '../../datascript';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive, RouterOutlet,NavigationComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})


export class ResumeComponent {
 

  constructor(private router: Router) {
    
    const foundData = dataSript.find((x) => x.theme.url === "george-devid");
    console.log(foundData);
    if (foundData) {
      console.log(foundData);
    }
  }
  activeTab: string = 'skills'; // Default to the 'Skills' tab

  // Function to switch tabs
  showTab(tabName: string) {
    this.activeTab = tabName;
  }

  navigateToProjectDetails(projectId: string) {
    console.log(projectId)
    this.router.navigate(['/project', projectId]);
  }

}
