import { Component } from '@angular/core';
import { NasaImageService } from '../services/nasa-image.service';

@Component({
  selector: 'app-nasa-image',
  templateUrl: './nasa-image.page.html',
  styleUrls: ['./nasa-image.page.scss'],
})
export class NasaImagePage {
  searchQuery: string = '';
  mediaType: string = 'image'; 
  mediaResults: any;
  errorMessage: string = '';

  constructor(private nasaImageService: NasaImageService) {}

  searchMedia() {
    this.nasaImageService.searchMedia(this.searchQuery, this.mediaType).subscribe(
      (data) => {
        this.mediaResults = data;
      },
      (error) => {
        this.errorMessage = 'Error fetching data. Please try again.';
        console.error(error);
      }
    );
  }

  viewMetadata(nasaId: string) {
    this.nasaImageService.getMetadata(nasaId).subscribe(
      (data) => {
        console.log('Metadata:', data);
        alert(JSON.stringify(data));
      },
      (error) => {
        this.errorMessage = 'Error fetching metadata.';
        console.error(error);
      }
    );
  }

  viewAssets(nasaId: string) {
    this.nasaImageService.getAssets(nasaId).subscribe(
      (data) => {
        console.log('Assets:', data);
        alert(JSON.stringify(data));
      },
      (error) => {
        this.errorMessage = 'Error fetching assets.';
        console.error(error);
      }
    );
  }

  viewCaptions(nasaId: string) {
    this.nasaImageService.getCaptions(nasaId).subscribe(
      (data) => {
        console.log('Captions:', data);
        alert(JSON.stringify(data));
      },
      (error) => {
        this.errorMessage = 'Error fetching captions.';
        console.error(error);
      }
    );
  }
}
