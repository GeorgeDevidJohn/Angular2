import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlStorageService {
  private urlName: string = '';
  private userId: string = '';

  constructor() { }

  setUrlName(urlName: string) {
    this.urlName = urlName;
  }

  getUrlName(): string {
    return this.urlName;
  }

  setUserId(userId: string){
    this.userId = userId;
  }

  getUserId(){
    return this.userId;
  }
}
