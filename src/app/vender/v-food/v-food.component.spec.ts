import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VFoodComponent } from './v-food.component';

describe('VFoodComponent', () => {
  let component: VFoodComponent;
  let fixture: ComponentFixture<VFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
