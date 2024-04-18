import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

export interface IAuth {
  token: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private apiUrl: string = 'http://localhost:3000/api/';

  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private myToken = '';
  private url: string = 'http://localhost:3000/api/login';
  private urlRegister: string = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient,private cookieService: CookieService) { }

  login(email: string, password: string): Observable<IAuth> {
    return this.http
      .post<IAuth>(this.url, {
        email: email,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          this._isLoggedIn$.next(true);
          this.myToken = response.token;

          localStorage.setItem('authToken', response.token);
        })
      );
  }

  loginDetails(alldetails: any): Observable<any> {
    // Define your headers
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Assuming you're sending JSON data
      // Add any other headers you need, such as authorization token, etc.
    });
  
    // Include headers in the options parameter of the post request
    const options = { headers: headers };
  
    // Make the HTTP POST request with headers included
    return this.http.post<any>(this.apiUrl + "customers/user", alldetails, options);
  }



  logout() {
    this.cookieService.delete('userId');
    this.cookieService.delete('urlName');
    console.log("value");
  }
  
  
  register(firstName: string,lastName: string, email: string, password: string): Observable<IAuth> {
    return this.http
      .post<IAuth>(this.urlRegister, {
        firstName: firstName,
        lastName:lastName,
        email: email,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          this._isLoggedIn$.next(true);
          this.myToken = response.token;
          localStorage.setItem('authToken', response.token);
        })
      );
  }


}
