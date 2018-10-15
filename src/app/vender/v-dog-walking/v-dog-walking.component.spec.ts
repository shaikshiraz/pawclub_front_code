import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VDogWalkingComponent } from './v-dog-walking.component';

describe('VDogWalkingComponent', () => {
  let component: VDogWalkingComponent;
  let fixture: ComponentFixture<VDogWalkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VDogWalkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VDogWalkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
