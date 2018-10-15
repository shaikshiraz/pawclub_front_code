import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VAdoptionComponent } from './v-adoption.component';

describe('VAdoptionComponent', () => {
  let component: VAdoptionComponent;
  let fixture: ComponentFixture<VAdoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VAdoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
