import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../../../environment.prod';
@Component({
  selector: 'app-alarm',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './alarm.component.html',
  styleUrl: './alarm.component.scss'
})
export class AlarmComponent implements OnInit {
  currentTime: Date = new Date(); 
  pendingOrders: any[] = [];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.httpClient.get(environment.apiUrl + '/get-pending-records' ).subscribe((result: any) => {
      this.pendingOrders = result?.pending_orders;
    })
  }
}
