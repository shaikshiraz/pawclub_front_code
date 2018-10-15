import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTrainerComponent } from './c-trainer.component';

describe('CTrainerComponent', () => {
  let component: CTrainerComponent;
  let fixture: ComponentFixture<CTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
