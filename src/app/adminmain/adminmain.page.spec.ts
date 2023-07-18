import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminmainPage } from './adminmain.page';

describe('AdminmainPage', () => {
  let component: AdminmainPage;
  let fixture: ComponentFixture<AdminmainPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminmainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
