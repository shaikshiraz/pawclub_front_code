import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAdoptionComponent } from './c-adoption.component';

describe('CAdoptionComponent', () => {
  let component: CAdoptionComponent;
  let fixture: ComponentFixture<CAdoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAdoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
