import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VResetPasswordComponent } from './v-reset-password.component';

describe('VResetPasswordComponent', () => {
  let component: VResetPasswordComponent;
  let fixture: ComponentFixture<VResetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VResetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
