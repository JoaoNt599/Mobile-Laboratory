import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonkiPageRoutingModule } from './donki-routing.module';

import { DonkiPage } from './donki.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonkiPageRoutingModule
  ],
  declarations: [DonkiPage]
})
export class DonkiPageModule {}
