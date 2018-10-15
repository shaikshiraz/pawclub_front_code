import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CWishListComponent } from './c-wish-list.component';

describe('CWishListComponent', () => {
  let component: CWishListComponent;
  let fixture: ComponentFixture<CWishListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CWishListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
