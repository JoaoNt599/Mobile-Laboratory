import { Component, OnInit } from '@angular/core';
import { MarsRoverPhotosService } from '../services/mars-rover-photos.service';

@Component({
  selector: 'app-mars-rover-photos',
  templateUrl: './mars-rover-photos.page.html',
  styleUrls: ['./mars-rover-photos.page.scss'],
})
export class MarsRoverPhotosPage implements OnInit {
  photos: any[] = [];
  sol: number = 1000;  
  currentPage: number = 1;  
  totalPages: number = 10; 

  constructor(private marsRoverPhotosService: MarsRoverPhotosService) {}

  ngOnInit() {
    this.loadPhotos(this.currentPage);
  }

  
  loadPhotos(page: number) {
    this.currentPage = page;  
    this.marsRoverPhotosService.getMarsRoverPhotos(this.sol, this.currentPage).subscribe(
      data => {
        this.photos = data.photos;
      },
      error => {
        console.error('Error loading Rover photos on Mars', error);
      }
    );
  }

  // Function to change pages when clicking a pagination button
  changePage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.loadPhotos(page);
    }
  }
}
