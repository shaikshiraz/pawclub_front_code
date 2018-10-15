import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CVendersListPageComponent } from './c-venders-list-page.component';

describe('CVendersListPageComponent', () => {
  let component: CVendersListPageComponent;
  let fixture: ComponentFixture<CVendersListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CVendersListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CVendersListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
