import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExoplanetPage } from './exoplanet.page';

const routes: Routes = [
  {
    path: '',
    component: ExoplanetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExoplanetPageRoutingModule {}
