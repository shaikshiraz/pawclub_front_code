import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VVendersHomeComponent } from './v-venders-home.component';

describe('VVendersHomeComponent', () => {
  let component: VVendersHomeComponent;
  let fixture: ComponentFixture<VVendersHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VVendersHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VVendersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
