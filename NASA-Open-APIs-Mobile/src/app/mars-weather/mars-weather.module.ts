import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarsWeatherPageRoutingModule } from './mars-weather-routing.module';

import { MarsWeatherPage } from './mars-weather.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarsWeatherPageRoutingModule
  ],
  declarations: [MarsWeatherPage]
})
export class MarsWeatherPageModule {}
