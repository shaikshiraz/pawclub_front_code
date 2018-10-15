import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPolicyComponent } from './c-policy.component';

describe('CPolicyComponent', () => {
  let component: CPolicyComponent;
  let fixture: ComponentFixture<CPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
