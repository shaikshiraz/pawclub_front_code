import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VNgoComponent } from './v-ngo.component';

describe('VNgoComponent', () => {
  let component: VNgoComponent;
  let fixture: ComponentFixture<VNgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VNgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VNgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
