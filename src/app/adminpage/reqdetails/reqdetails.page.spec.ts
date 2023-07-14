import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReqdetailsPage } from './reqdetails.page';

describe('ReqdetailsPage', () => {
  let component: ReqdetailsPage;
  let fixture: ComponentFixture<ReqdetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReqdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
