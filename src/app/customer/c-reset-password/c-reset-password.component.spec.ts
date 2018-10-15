import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CResetPasswordComponent } from './c-reset-password.component';

describe('CResetPasswordComponent', () => {
  let component: CResetPasswordComponent;
  let fixture: ComponentFixture<CResetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CResetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
