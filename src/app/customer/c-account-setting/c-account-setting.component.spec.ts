import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAccountSettingComponent } from './c-account-setting.component';

describe('CAccountSettingComponent', () => {
  let component: CAccountSettingComponent;
  let fixture: ComponentFixture<CAccountSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAccountSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAccountSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
