import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExoplanetPage } from './exoplanet.page';

describe('ExoplanetPage', () => {
  let component: ExoplanetPage;
  let fixture: ComponentFixture<ExoplanetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoplanetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
