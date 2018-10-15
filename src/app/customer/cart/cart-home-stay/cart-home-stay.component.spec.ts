import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartHomeStayComponent } from './cart-home-stay.component';

describe('CartHomeStayComponent', () => {
  let component: CartHomeStayComponent;
  let fixture: ComponentFixture<CartHomeStayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartHomeStayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartHomeStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
