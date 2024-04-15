import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface IAuth {
  token: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public _isLoggedIn$ = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private myToken = '';
  private url: string = 'http://localhost:5000/api/auth';
  private urlRegister: string = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) { }

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
  logout() {
    this._isLoggedIn$.next(false);
    this.myToken = '';

    localStorage.removeItem('authToken');
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
