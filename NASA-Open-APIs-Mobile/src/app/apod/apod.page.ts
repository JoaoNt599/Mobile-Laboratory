import { Component, OnInit } from '@angular/core';
import { NasaService } from '../services/nasa.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.page.html',
  styleUrls: ['./apod.page.scss'],
})

export class ApodPage implements OnInit {
  apodData: any = {};

  constructor(private nasaService: NasaService) { }

  ngOnInit() {
    this.nasaService.getAstronomyPicture().subscribe(
      (data) => {
        this.apodData = data;
      },
      (error) => {
        console.error("Error loading image: ", error);
      }
    );
  }
}
