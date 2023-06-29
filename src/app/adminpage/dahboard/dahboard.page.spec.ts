import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DahboardPage } from './dahboard.page';

describe('DahboardPage', () => {
  let component: DahboardPage;
  let fixture: ComponentFixture<DahboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DahboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
