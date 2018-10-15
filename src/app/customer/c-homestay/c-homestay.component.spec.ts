import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CHomestayComponent } from './c-homestay.component';

describe('CHomestayComponent', () => {
  let component: CHomestayComponent;
  let fixture: ComponentFixture<CHomestayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CHomestayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CHomestayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
