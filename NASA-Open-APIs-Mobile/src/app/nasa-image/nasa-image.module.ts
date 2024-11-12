import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NasaImagePageRoutingModule } from './nasa-image-routing.module';

import { NasaImagePage } from './nasa-image.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NasaImagePageRoutingModule
  ],
  declarations: [NasaImagePage]
})
export class NasaImagePageModule {}
