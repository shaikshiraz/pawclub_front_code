import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAboutUsComponent } from './c-about-us.component';

describe('CAboutUsComponent', () => {
  let component: CAboutUsComponent;
  let fixture: ComponentFixture<CAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
