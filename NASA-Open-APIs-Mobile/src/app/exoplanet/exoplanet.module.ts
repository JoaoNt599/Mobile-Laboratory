import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExoplanetPageRoutingModule } from './exoplanet-routing.module';

import { ExoplanetPage } from './exoplanet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExoplanetPageRoutingModule
  ],
  declarations: [ExoplanetPage]
})
export class ExoplanetPageModule {}
