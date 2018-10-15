import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VAccountSettingComponent } from './v-account-setting.component';

describe('VAccountSettingComponent', () => {
  let component: VAccountSettingComponent;
  let fixture: ComponentFixture<VAccountSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VAccountSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VAccountSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
