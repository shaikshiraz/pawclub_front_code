import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KennelCartComponent } from './kennel-cart.component';

describe('KennelCartComponent', () => {
  let component: KennelCartComponent;
  let fixture: ComponentFixture<KennelCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KennelCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KennelCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
