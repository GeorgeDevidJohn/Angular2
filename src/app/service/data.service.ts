import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl: string = 'https://job-portal-beryl-theta.vercel.app/api/';

  constructor(private http: HttpClient) {}

  getData(username:any): Observable<any> {
    return this.http.get<any>(this.apiUrl+'customers/url?url='+username);
  }

  getProjectDetails(id:any): Observable<any> {
    return this.http.get<any>(this.apiUrl+'projects/id?id='+id);
  }

  
  getProjects(username:any): Observable<any> {
    return this.http.get<any>(this.apiUrl+'projects/url?url='+username);
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
  
  updateExperience(alldetails: any[]): Observable<any> {
    return this.http.put<any>(this.apiUrl, alldetails);
  }
  
  updateProjects(alldetails: any[]): Observable<any> {
    return this.http.put<any>(this.apiUrl, alldetails);
  }
  
  updateTheme(alldetails: { url: string | null | undefined; theam: string | null | undefined; }): Observable<any> {
    return this.http.put<any>(this.apiUrl, alldetails);
  }
}
