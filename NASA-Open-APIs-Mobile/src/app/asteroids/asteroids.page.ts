import { Component, OnInit } from '@angular/core';
import { AsteroidsService } from '../services/asteroids.service';

@Component({
  selector: 'app-asteroids',
  templateUrl: './asteroids.page.html',
  styleUrls: ['./asteroids.page.scss'],
})
export class AsteroidsPage implements OnInit {
  asteroidData: any = {};
  datesArray: Array<any> = [];

  constructor(private asteroidService: AsteroidsService) {}

  ngOnInit() {
    this.asteroidService.getAsteroids().subscribe(
      (data) => {
        console.log(data);
        this.asteroidData = data;
        this.datesArray = Object.keys(this.asteroidData.near_earth_objects).map(key => ({
          date: key,
          asteroids: this.asteroidData.near_earth_objects[key]
        }));
      },
      (error) => {
        console.error('Error loading asteroid data: ', error);
      }
    );
  }
}
