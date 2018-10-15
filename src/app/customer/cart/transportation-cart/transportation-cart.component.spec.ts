import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationCartComponent } from './transportation-cart.component';

describe('TransportationCartComponent', () => {
  let component: TransportationCartComponent;
  let fixture: ComponentFixture<TransportationCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportationCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
