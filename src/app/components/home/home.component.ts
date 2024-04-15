import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';

import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ResumeComponent } from '../resume/resume.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive, RouterOutlet,RouterOutlet,NavigationComponent,ResumeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
 
})
export class HomeComponent {
 
  
}
