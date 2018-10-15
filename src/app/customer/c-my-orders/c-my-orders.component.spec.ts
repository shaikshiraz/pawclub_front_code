import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CMyOrdersComponent } from './c-my-orders.component';

describe('CMyOrdersComponent', () => {
  let component: CMyOrdersComponent;
  let fixture: ComponentFixture<CMyOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CMyOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CMyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
