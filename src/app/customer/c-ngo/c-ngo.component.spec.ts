import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CNgoComponent } from './c-ngo.component';

describe('CNgoComponent', () => {
  let component: CNgoComponent;
  let fixture: ComponentFixture<CNgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CNgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CNgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
