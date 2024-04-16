import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import dataSript from '../../datascript';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { NavigationComponent } from '../navigation/navigation.component';
import { DataService } from '../../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive, RouterOutlet,NavigationComponent],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})


export class ResumeComponent {
  resumeDetails: any;
  firstHalf: any;
  secondHalf: any;
 

  constructor(private router: Router,private _dataService: DataService,private route: ActivatedRoute) {
    
    this.route.paramMap.subscribe(params => {
      const username = params.get('userurl');
      this._dataService.getData(username).subscribe((data) => {
        
        if(data.status === 404){
          this.router.navigateByUrl('/pagenotfound');
        }{
        this.resumeDetails = data.data
        const skillsArray = this.resumeDetails.customer.skills.split(',');
        const midpointIndex = Math.ceil(skillsArray.length / 2);
        this.firstHalf = skillsArray.slice(0, midpointIndex);
        this.secondHalf = skillsArray.slice(midpointIndex);
        }
       
      }); // This will log "george-devid" to the console
    });

    // this._dataService.getData().subscribe((data) => {
     
    //   this.resumeDetails = data.data
    //   const skillsArray = this.resumeDetails.customer.skills.split(',');
    //   const midpointIndex = Math.ceil(skillsArray.length / 2);
    //   this.firstHalf = skillsArray.slice(0, midpointIndex);
    //   this.secondHalf = skillsArray.slice(midpointIndex);
    // });
   
      


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
  onViewProjectDetails(id:any) {
    this.router.navigateByUrl('/projectdetail/'+id);
  } 

  onViewAllProject(url:string)
  {
   
    this.router.navigateByUrl('/projects/'+url);
    
  }
 
}
