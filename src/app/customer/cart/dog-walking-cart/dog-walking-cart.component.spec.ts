import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogWalkingCartComponent } from './dog-walking-cart.component';

describe('DogWalkingCartComponent', () => {
  let component: DogWalkingCartComponent;
  let fixture: ComponentFixture<DogWalkingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogWalkingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogWalkingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
