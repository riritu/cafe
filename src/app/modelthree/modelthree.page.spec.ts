import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModelthreePage } from './modelthree.page';

describe('ModelthreePage', () => {
  let component: ModelthreePage;
  let fixture: ComponentFixture<ModelthreePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModelthreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
