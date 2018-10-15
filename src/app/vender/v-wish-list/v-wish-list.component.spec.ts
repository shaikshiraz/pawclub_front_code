import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VWishListComponent } from './v-wish-list.component';

describe('VWishListComponent', () => {
  let component: VWishListComponent;
  let fixture: ComponentFixture<VWishListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VWishListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
