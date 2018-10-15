import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApendComponent } from './apend.component';

describe('ApendComponent', () => {
  let component: ApendComponent;
  let fixture: ComponentFixture<ApendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
