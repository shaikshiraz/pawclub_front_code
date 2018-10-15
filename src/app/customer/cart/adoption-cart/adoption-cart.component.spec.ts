import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionCartComponent } from './adoption-cart.component';

describe('AdoptionCartComponent', () => {
  let component: AdoptionCartComponent;
  let fixture: ComponentFixture<AdoptionCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
