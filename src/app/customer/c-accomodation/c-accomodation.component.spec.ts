import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAccomodationComponent } from './c-accomodation.component';

describe('CAccomodationComponent', () => {
  let component: CAccomodationComponent;
  let fixture: ComponentFixture<CAccomodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAccomodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
