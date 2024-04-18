import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NavigationComponent } from '../navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../service/data.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [RouterLink,NavigationComponent,CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {
  projectDetails: any;
  projectSkillsArray: any;
  projectLearningOutcomeArray: any;
  urlName: any;

  constructor(private router: Router,private _dataService: DataService,private route: ActivatedRoute,private cookieService :CookieService) {
   
    this.route.paramMap.subscribe(params => {
      const id = params.get('projectdetail');
      this._dataService.getProjectDetails(id).subscribe((data) => {
        
        // if(data.status != 200){
        //   this.router.navigateByUrl('/pagenotfound');
        // }
        {
          console.log(data)
        this.projectDetails = data.data;
        this.urlName = this.cookieService.get('urlName');;
        this.projectSkillsArray = this.projectDetails.skills.split(',');
        this.projectLearningOutcomeArray = this.projectDetails.learningOutcomes.split(',');
       
        }
       
      }); // This will log "george-devid" to the console
    });



  }



}
