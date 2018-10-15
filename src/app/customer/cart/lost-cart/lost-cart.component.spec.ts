import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LostCartComponent } from './lost-cart.component';

describe('LostCartComponent', () => {
  let component: LostCartComponent;
  let fixture: ComponentFixture<LostCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LostCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
