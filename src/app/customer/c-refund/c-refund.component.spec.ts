import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRefundComponent } from './c-refund.component';

describe('CRefundComponent', () => {
  let component: CRefundComponent;
  let fixture: ComponentFixture<CRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
