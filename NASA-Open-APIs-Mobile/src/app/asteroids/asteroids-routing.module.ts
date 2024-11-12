import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsteroidsPage } from './asteroids.page';

const routes: Routes = [
  {
    path: '',
    component: AsteroidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsteroidsPageRoutingModule {}
