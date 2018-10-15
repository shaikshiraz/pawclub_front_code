import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoCartComponent } from './ngo-cart.component';

describe('NgoCartComponent', () => {
  let component: NgoCartComponent;
  let fixture: ComponentFixture<NgoCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgoCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
