import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPhotographyComponent } from './c-photography.component';

describe('CPhotographyComponent', () => {
  let component: CPhotographyComponent;
  let fixture: ComponentFixture<CPhotographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPhotographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
