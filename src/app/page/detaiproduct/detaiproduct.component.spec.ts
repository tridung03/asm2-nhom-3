import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaiproductComponent } from './detaiproduct.component';

describe('DetaiproductComponent', () => {
  let component: DetaiproductComponent;
  let fixture: ComponentFixture<DetaiproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetaiproductComponent]
    });
    fixture = TestBed.createComponent(DetaiproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
