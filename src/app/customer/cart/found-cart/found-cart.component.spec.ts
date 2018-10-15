import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundCartComponent } from './found-cart.component';

describe('FoundCartComponent', () => {
  let component: FoundCartComponent;
  let fixture: ComponentFixture<FoundCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
