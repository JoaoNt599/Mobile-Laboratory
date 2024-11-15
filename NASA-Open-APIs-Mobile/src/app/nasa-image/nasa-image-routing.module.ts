import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NasaImagePage } from './nasa-image.page';

const routes: Routes = [
  {
    path: '',
    component: NasaImagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NasaImagePageRoutingModule {}
