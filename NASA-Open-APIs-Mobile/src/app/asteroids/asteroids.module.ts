import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsteroidsPageRoutingModule } from './asteroids-routing.module';

import { AsteroidsPage } from './asteroids.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsteroidsPageRoutingModule
  ],
  declarations: [AsteroidsPage]
})
export class AsteroidsPageModule {}
