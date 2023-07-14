import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModelfourPage } from './modelfour.page';

describe('ModelfourPage', () => {
  let component: ModelfourPage;
  let fixture: ComponentFixture<ModelfourPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModelfourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
