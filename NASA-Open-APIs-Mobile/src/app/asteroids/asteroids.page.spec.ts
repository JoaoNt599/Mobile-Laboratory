import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsteroidsPage } from './asteroids.page';

describe('AsteroidsPage', () => {
  let component: AsteroidsPage;
  let fixture: ComponentFixture<AsteroidsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
