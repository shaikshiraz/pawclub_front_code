import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CContactUsComponent } from './c-contact-us.component';

describe('CContactUsComponent', () => {
  let component: CContactUsComponent;
  let fixture: ComponentFixture<CContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
