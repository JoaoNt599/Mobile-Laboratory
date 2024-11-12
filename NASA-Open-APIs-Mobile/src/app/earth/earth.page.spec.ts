import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EarthPage } from './earth.page';

describe('EarthPage', () => {
  let component: EarthPage;
  let fixture: ComponentFixture<EarthPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EarthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
