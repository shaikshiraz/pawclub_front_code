import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VPetProfileComponent } from './v-pet-profile.component';

describe('VPetProfileComponent', () => {
  let component: VPetProfileComponent;
  let fixture: ComponentFixture<VPetProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VPetProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VPetProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
