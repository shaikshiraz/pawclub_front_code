import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSwimmingComponent } from './c-swimming.component';

describe('CSwimmingComponent', () => {
  let component: CSwimmingComponent;
  let fixture: ComponentFixture<CSwimmingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSwimmingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSwimmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
