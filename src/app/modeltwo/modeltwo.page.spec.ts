import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModeltwoPage } from './modeltwo.page';

describe('ModeltwoPage', () => {
  let component: ModeltwoPage;
  let fixture: ComponentFixture<ModeltwoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModeltwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
