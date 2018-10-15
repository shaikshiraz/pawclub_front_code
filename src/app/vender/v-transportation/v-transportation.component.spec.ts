import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTransportationComponent } from './v-transportation.component';

describe('VTransportationComponent', () => {
  let component: VTransportationComponent;
  let fixture: ComponentFixture<VTransportationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTransportationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
