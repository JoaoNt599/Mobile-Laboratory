import { Component, OnInit } from '@angular/core';
import { EonetService } from '../services/eonet.service';

@Component({
  selector: 'app-eonet',
  templateUrl: './eonet.page.html',
  styleUrls: ['./eonet.page.scss'],
})
export class EonetPage implements OnInit {
  eonetEvents: any[] = [];
  errorMessage: string = '';

  constructor(private eonetService: EonetService) {}

  ngOnInit() {
    this.loadEonetEvents();
  }

  loadEonetEvents() {
    this.eonetService.getEonetEvents().subscribe(
      (data) => {
        this.eonetEvents = data.events; 
        this.errorMessage = '';
      },
      (error) => {
        console.error('Error loading EONET events: ', error);
        this.errorMessage = 'Error loading EONET events.';
      }
    );
  }
}
