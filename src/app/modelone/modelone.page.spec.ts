import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModelonePage } from './modelone.page';

describe('ModelonePage', () => {
  let component: ModelonePage;
  let fixture: ComponentFixture<ModelonePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModelonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
