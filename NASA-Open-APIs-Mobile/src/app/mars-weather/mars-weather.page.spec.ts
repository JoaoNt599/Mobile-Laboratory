import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarsWeatherPage } from './mars-weather.page';

describe('MarsWeatherPage', () => {
  let component: MarsWeatherPage;
  let fixture: ComponentFixture<MarsWeatherPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsWeatherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
