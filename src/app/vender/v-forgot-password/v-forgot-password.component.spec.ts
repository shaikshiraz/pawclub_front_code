import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VForgotPasswordComponent } from './v-forgot-password.component';

describe('VForgotPasswordComponent', () => {
  let component: VForgotPasswordComponent;
  let fixture: ComponentFixture<VForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
