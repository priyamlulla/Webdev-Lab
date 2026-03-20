import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './items.html',
  styleUrls: ['./items.css']
})
export class ItemsComponent implements OnInit {

  items: any[] = [];

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    try {
      this.items = await this.apiService.getItems();
      this.items = this.items.slice(0, 10);
      console.log(this.items); // ✅ IMPORTANT
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }
}