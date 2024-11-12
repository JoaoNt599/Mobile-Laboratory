import { Component, OnInit } from '@angular/core';
import { OsdrService } from '../services/osdr.service';

@Component({
  selector: 'app-osdr',
  templateUrl: './osdr.page.html',
  styleUrls: ['./osdr.page.scss'],
})
export class OsdrPage implements OnInit {
  osdrData: any[] = [];
  errorMessage: string = '';

  constructor(private osdrService: OsdrService) {}

  ngOnInit() {
    this.osdrService.getOsdrData().subscribe(
      (data: any) => {
        this.osdrData = data;
      },
      (error) => {
        this.errorMessage = 'Error loading OSDR data.', error;
      }
    );
  }
}
