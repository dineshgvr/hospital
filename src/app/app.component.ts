import { Component, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../environment.prod';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LayoutComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hospital';

  constructor(private http: HttpClient, private router: Router) {
    if (isDevMode()) {
      console.log('Development!');
    } else {
      console.log('Production!');
    }

    this.http.get(environment.apiUrl + '/get-pending-count').subscribe((result: any) => {
      if(result?.pending_count && result.pending_count > 0) {
        this.router.navigate(['/alarm'])
      }
    })
  }
}
