import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NasaImagePage } from './nasa-image.page';

describe('NasaImagePage', () => {
  let component: NasaImagePage;
  let fixture: ComponentFixture<NasaImagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
