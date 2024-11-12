import { Component, OnInit } from '@angular/core';
import { ExoplanetService } from '../services/exoplanet.service';

@Component({
  selector: 'app-exoplanet',
  templateUrl: './exoplanet.page.html',
  styleUrls: ['./exoplanet.page.scss'],
})
export class ExoplanetPage implements OnInit {
  exoplanets: any[] = [];
  errorMessage: string = '';

  constructor(private exoplanetService: ExoplanetService) {}

  ngOnInit() {
    this.exoplanetService.getExoplanets().subscribe(
      (data: any) => {
        this.exoplanets = data;
      },
      (error) => {
        this.errorMessage = 'Error loading exoplanets. ', error;
      }
    );
  }
}