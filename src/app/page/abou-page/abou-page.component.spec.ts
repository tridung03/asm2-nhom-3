import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbouPageComponent } from './abou-page.component';

describe('AbouPageComponent', () => {
  let component: AbouPageComponent;
  let fixture: ComponentFixture<AbouPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbouPageComponent]
    });
    fixture = TestBed.createComponent(AbouPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
