import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VTrainerComponent } from './v-trainer.component';

describe('VTrainerComponent', () => {
  let component: VTrainerComponent;
  let fixture: ComponentFixture<VTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
