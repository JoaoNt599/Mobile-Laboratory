import { Component } from '@angular/core';
import { EarthService } from '../services/earth.service';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.page.html',
  styleUrls: ['./earth.page.scss'],
})
export class EarthPage {
  earthImageUrl: string = '';
  lat: number =  48.8566;
  lon: number = -2.3522;
  date: string = '2023-08-20'; 
  errorMessage: string = '';

  constructor(private earthService: EarthService) {}

  getEarthImage() {
    console.log('Selected Date:', this.date);

    this.earthService.getEarthImage(this.lat, this.lon, this.date).subscribe(
      (data) => {
        const objectURL = URL.createObjectURL(data);
        this.earthImageUrl = objectURL;
        this.errorMessage = ''; 
      },
      (error) => {
        console.error('Error loading Earth image: ', error);
        this.errorMessage = 'Error searching image. Please try again later.';
        this.earthImageUrl = '';
      }
    );
  }

  clearImage() {
    this.earthImageUrl = '';
    this.errorMessage = '';
  }
}
