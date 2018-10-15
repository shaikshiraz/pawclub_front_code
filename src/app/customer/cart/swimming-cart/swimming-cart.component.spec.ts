import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimmingCartComponent } from './swimming-cart.component';

describe('SwimmingCartComponent', () => {
  let component: SwimmingCartComponent;
  let fixture: ComponentFixture<SwimmingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimmingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimmingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
