import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminpagePage } from './adminpage.page';

describe('AdminpagePage', () => {
  let component: AdminpagePage;
  let fixture: ComponentFixture<AdminpagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
