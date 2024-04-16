import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Only import Router from '@angular/router'
import { NavigationComponent } from '../navigation/navigation.component';
import { routes } from '../../app.routes';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports:[NavigationComponent,CommonModule],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'] // Correct the property name to 'styleUrls'
})
export class ProjectListComponent {
  projects: any;
  usernameurl: any

  constructor(private router: Router,private _dataService: DataService,private route: ActivatedRoute) 
  
  {
    this.route.paramMap.subscribe(params => {
      const username = params.get('userurl');
      this.usernameurl = params.get('userurl');
      this._dataService.getProjects(username).subscribe((data) => {
        
        if(data.status === 404){
          this.router.navigateByUrl('/pagenotfound');
        }{
          console.log(data)
        this.projects = data.data
           
        }
       
      }); // This will log "george-devid" to the console
    });

   } 
  


  onViewProjectDetails( id:any) {
    this.router.navigateByUrl('/projectdetail/'+id);
  } 
}
