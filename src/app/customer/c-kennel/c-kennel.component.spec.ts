import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CKennelComponent } from './c-kennel.component';

describe('CKennelComponent', () => {
  let component: CKennelComponent;
  let fixture: ComponentFixture<CKennelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CKennelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CKennelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
