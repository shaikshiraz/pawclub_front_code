import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CDogWalkingComponent } from './c-dog-walking.component';

describe('CDogWalkingComponent', () => {
  let component: CDogWalkingComponent;
  let fixture: ComponentFixture<CDogWalkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CDogWalkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CDogWalkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
