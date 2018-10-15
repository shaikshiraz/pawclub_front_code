import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VSwimmingComponent } from './v-swimming.component';

describe('VSwimmingComponent', () => {
  let component: VSwimmingComponent;
  let fixture: ComponentFixture<VSwimmingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VSwimmingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VSwimmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
