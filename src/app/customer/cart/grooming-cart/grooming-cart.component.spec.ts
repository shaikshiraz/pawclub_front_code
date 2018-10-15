import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomingCartComponent } from './grooming-cart.component';

describe('GroomingCartComponent', () => {
  let component: GroomingCartComponent;
  let fixture: ComponentFixture<GroomingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
