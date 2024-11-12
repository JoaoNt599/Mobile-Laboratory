import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OsdrPage } from './osdr.page';

describe('OsdrPage', () => {
  let component: OsdrPage;
  let fixture: ComponentFixture<OsdrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OsdrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
