import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTransportationComponent } from './c-transportation.component';

describe('CTransportationComponent', () => {
  let component: CTransportationComponent;
  let fixture: ComponentFixture<CTransportationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTransportationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
