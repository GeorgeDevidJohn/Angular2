import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl: string = 'https://job-portal-beryl-theta.vercel.app/api/';

  constructor(private http: HttpClient) {}

  // getData(): Observable<any> {
  //   return this.http.get<any>('assets/data.json');
  // }

  addDetails(alldetails:any): Observable<any> {
    return this.http.post<any>(this.apiUrl + "customers", alldetails);
  }

  updatePersonals(alldetails: { firstName: string | null | undefined; lastName: string | null | undefined; summary: string | null | undefined; phone: number | null | undefined; skills: string | null | undefined; email: string | null | undefined; gitLink: string | null | undefined; linkedinLink: string | null | undefined; address: string | null | undefined; profilePicture: null | undefined; }): Observable<any> {
    return this.http.put<any>(this.apiUrl, alldetails);
  }

  updateEducation(alldetails: any[]): Observable<any> {
    return this.http.put<any>(this.apiUrl, alldetails);
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
