import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnitaboutPage } from './unitabout.page';

describe('UnitaboutPage', () => {
  let component: UnitaboutPage;
  let fixture: ComponentFixture<UnitaboutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnitaboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
