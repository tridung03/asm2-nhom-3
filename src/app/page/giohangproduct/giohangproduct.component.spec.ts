import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiohangproductComponent } from './giohangproduct.component';

describe('GiohangproductComponent', () => {
  let component: GiohangproductComponent;
  let fixture: ComponentFixture<GiohangproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiohangproductComponent]
    });
    fixture = TestBed.createComponent(GiohangproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
