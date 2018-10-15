import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCartComponent } from './training-cart.component';

describe('TrainingCartComponent', () => {
  let component: TrainingCartComponent;
  let fixture: ComponentFixture<TrainingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
