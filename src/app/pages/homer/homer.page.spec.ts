import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomerPage } from './homer.page';

describe('HomerPage', () => {
  let component: HomerPage;
  let fixture: ComponentFixture<HomerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
