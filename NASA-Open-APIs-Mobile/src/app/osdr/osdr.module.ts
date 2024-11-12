import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OsdrPageRoutingModule } from './osdr-routing.module';

import { OsdrPage } from './osdr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OsdrPageRoutingModule
  ],
  declarations: [OsdrPage]
})
export class OsdrPageModule {}
