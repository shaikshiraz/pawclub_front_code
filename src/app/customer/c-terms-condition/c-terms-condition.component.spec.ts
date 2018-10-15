import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTermsConditionComponent } from './c-terms-condition.component';

describe('CTermsConditionComponent', () => {
  let component: CTermsConditionComponent;
  let fixture: ComponentFixture<CTermsConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTermsConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTermsConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
