import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CCustomerPageComponent } from './c-customer-page.component';

describe('CCustomerPageComponent', () => {
  let component: CCustomerPageComponent;
  let fixture: ComponentFixture<CCustomerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CCustomerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CCustomerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
