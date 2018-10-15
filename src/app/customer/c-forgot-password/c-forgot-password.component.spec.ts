import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CForgotPasswordComponent } from './c-forgot-password.component';

describe('CForgotPasswordComponent', () => {
  let component: CForgotPasswordComponent;
  let fixture: ComponentFixture<CForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
