import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhtoanproductComponent } from './thanhtoanproduct.component';

describe('ThanhtoanproductComponent', () => {
  let component: ThanhtoanproductComponent;
  let fixture: ComponentFixture<ThanhtoanproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThanhtoanproductComponent]
    });
    fixture = TestBed.createComponent(ThanhtoanproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
