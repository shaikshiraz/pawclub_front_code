import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPetProfileComponent } from './c-pet-profile.component';

describe('CPetProfileComponent', () => {
  let component: CPetProfileComponent;
  let fixture: ComponentFixture<CPetProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPetProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPetProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
