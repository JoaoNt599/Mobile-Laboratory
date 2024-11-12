import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'apod',
    loadChildren: () => import('./apod/apod.module').then( m => m.ApodPageModule)
  },
  {
    path: 'asteroids',
    loadChildren: () => import('./asteroids/asteroids.module').then( m => m.AsteroidsPageModule)
  },
  {
    path: 'donki',
    loadChildren: () => import('./donki/donki.module').then( m => m.DonkiPageModule)
  },
  {
    path: 'earth',
    loadChildren: () => import('./earth/earth.module').then( m => m.EarthPageModule)
  },
  {
    path: 'eonet',
    loadChildren: () => import('./eonet/eonet.module').then( m => m.EonetPageModule)
  },
  {
    path: 'epic',
    loadChildren: () => import('./epic/epic.module').then( m => m.EpicPageModule)
  },
  {
    path: 'exoplanet',
    loadChildren: () => import('./exoplanet/exoplanet.module').then( m => m.ExoplanetPageModule)
  },
  {
    path: 'osdr',
    loadChildren: () => import('./osdr/osdr.module').then( m => m.OsdrPageModule)
  },
  {
    path: 'mars-weather',
    loadChildren: () => import('./mars-weather/mars-weather.module').then( m => m.MarsWeatherPageModule)
  },
  {
    path: 'mars-rover-photos',
    loadChildren: () => import('./mars-rover-photos/mars-rover-photos.module').then( m => m.MarsRoverPhotosPageModule)
  },
  {
    path: 'live-stream',
    loadChildren: () => import('./live-stream/live-stream.module').then( m => m.LiveStreamPageModule)
  },
  {
    path: 'nasa-image',
    loadChildren: () => import('./nasa-image/nasa-image.module').then( m => m.NasaImagePageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./summary/summary.module').then( m => m.SummaryPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
