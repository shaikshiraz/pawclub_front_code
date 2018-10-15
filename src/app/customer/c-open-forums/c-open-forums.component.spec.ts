import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { COpenForumsComponent } from './c-open-forums.component';

describe('COpenForumsComponent', () => {
  let component: COpenForumsComponent;
  let fixture: ComponentFixture<COpenForumsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ COpenForumsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(COpenForumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
