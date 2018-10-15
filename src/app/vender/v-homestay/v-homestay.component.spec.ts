import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VHomestayComponent } from './v-homestay.component';

describe('VHomestayComponent', () => {
  let component: VHomestayComponent;
  let fixture: ComponentFixture<VHomestayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VHomestayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VHomestayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
