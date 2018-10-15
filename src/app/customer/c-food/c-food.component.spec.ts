import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CFoodComponent } from './c-food.component';

describe('CFoodComponent', () => {
  let component: CFoodComponent;
  let fixture: ComponentFixture<CFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
