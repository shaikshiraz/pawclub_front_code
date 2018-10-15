import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPetcareComponent } from './c-petcare.component';

describe('CPetcareComponent', () => {
  let component: CPetcareComponent;
  let fixture: ComponentFixture<CPetcareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPetcareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPetcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
