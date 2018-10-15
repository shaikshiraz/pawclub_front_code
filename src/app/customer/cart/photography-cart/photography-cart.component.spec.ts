import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyCartComponent } from './photography-cart.component';

describe('PhotographyCartComponent', () => {
  let component: PhotographyCartComponent;
  let fixture: ComponentFixture<PhotographyCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographyCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
