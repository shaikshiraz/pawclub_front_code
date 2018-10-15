import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CWhyUsComponent } from './c-why-us.component';

describe('CWhyUsComponent', () => {
  let component: CWhyUsComponent;
  let fixture: ComponentFixture<CWhyUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CWhyUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CWhyUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
