import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from  './components/navigation/navigation.component';
import { ColorPickerModule } from 'ngx-color-picker';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent, NavigationComponent,ColorPickerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'job-app';
}
