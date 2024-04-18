import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router'
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule,RouterLinkActive,RouterLink,RouterOutlet],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @Input() data: any;
  mobileMenuOpen = false;
  isLogedIn: boolean | undefined;
  constructor(private cookieService: CookieService 
    ){this.checkStatus()}
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  checkStatus(){ 
   const id = this.cookieService.get('userId');
   console.log("id")
   if(id !=""){

    this.isLogedIn = true;
   }
   else {
    console.log("is logged in")
    this.isLogedIn= false; 
  }
  

  }
  SignOut(){
    this.cookieService.delete('userId');
    
    this.checkStatus();
  }
  
}



