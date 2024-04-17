import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl: string = 'https://job-portal-beryl-theta.vercel.app/api/';

  constructor(private http: HttpClient,private router: Router) {}

  getData(username: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'customers/url?url=' + username).pipe(
      catchError((error) => {
        if (error.status === 404 || error.status === 400) {
          // Navigate to the "Page Not Found" page
          this.router.navigateByUrl('/pagenotfound');
        }
        // Re-throw the error so it can be handled further if needed
        return throwError(error);
      })
    );
  }

  getProjectDetails(id:any): Observable<any> {
    return this.http.get<any>(this.apiUrl+'projects/id?id='+id).pipe(
      catchError((error) => {
        if (error.status === 404 || error.status === 400) {
          // Navigate to the "Page Not Found" page
          this.router.navigateByUrl('/pagenotfound');
        }
        // Re-throw the error so it can be handled further if needed
        return throwError(error);
      })
    );
  }

  
  getProjects(username: any): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'projects/url?url=' + username).pipe(
      catchError((error) => {
        console.error('Error caught in getProjects:', error);
        if (error.status === 404 || error.status === 400) {
          console.log('Error status is 404. Navigating to Page Not Found.');
          // Navigate to the "Page Not Found" page
          this.router.navigateByUrl('/pagenotfound');
        }
        // Re-throw the error so it can be handled further if needed
        return throwError(error);
      })
    );
  }

  addDetails(alldetails: any): Observable<any> {
    // Define your headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Assuming you're sending JSON data
      // Add any other headers you need, such as authorization token, etc.
    });
  
    // Include headers in the options parameter of the post request
    const options = { headers: headers };
  
    // Make the HTTP POST request with headers included
    return this.http.post<any>(this.apiUrl + "customers", alldetails, options);
  }
  updatePersonals(alldetails: any): Observable<any> {
    return this.http.put<any>(this.apiUrl+"customers?id="+ alldetails._id , alldetails);
  }

  updateEducation(education: any): Observable<any> {
    return this.http.put<any>(this.apiUrl+"educations?id="+education._id , education);
  }
  
  updateExperience(experiance: any): Observable<any> {
    return this.http.put<any>(this.apiUrl+"experiences?id="+experiance._id, experiance);
  }
  
  updateProjects(projects: any): Observable<any> {
    return this.http.put<any>(this.apiUrl+"projects?id="+projects._id, projects);
  }
  
  updateTheme(alldetails: { url: string | null | undefined; theam: string | null | undefined; }): Observable<any> {
    return this.http.put<any>(this.apiUrl, alldetails);
  }

  addEducation(education: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+"educations" , education);
  }
  addExperience(experiance: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+"experiences" , experiance);
  }
  addProjects(projects: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+"projects", projects);
  }
 
  urlChecker(url: any): Observable<any> {
    return this.http.get<any>(this.apiUrl+"urlnamecheck?url="+url);
  }
}
