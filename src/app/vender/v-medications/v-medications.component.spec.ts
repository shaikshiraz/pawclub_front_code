import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VMedicationsComponent } from './v-medications.component';

describe('VMedicationsComponent', () => {
  let component: VMedicationsComponent;
  let fixture: ComponentFixture<VMedicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VMedicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
