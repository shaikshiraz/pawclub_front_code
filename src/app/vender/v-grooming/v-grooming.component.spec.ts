import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VGroomingComponent } from './v-grooming.component';

describe('VGroomingComponent', () => {
  let component: VGroomingComponent;
  let fixture: ComponentFixture<VGroomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VGroomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VGroomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
