import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CGroomingComponent } from './c-grooming.component';

describe('CGroomingComponent', () => {
  let component: CGroomingComponent;
  let fixture: ComponentFixture<CGroomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CGroomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CGroomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
