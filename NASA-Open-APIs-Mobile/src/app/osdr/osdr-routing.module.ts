import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OsdrPage } from './osdr.page';

const routes: Routes = [
  {
    path: '',
    component: OsdrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OsdrPageRoutingModule {}
