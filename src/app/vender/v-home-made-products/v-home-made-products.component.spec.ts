import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VHomeMadeProductsComponent } from './v-home-made-products.component';

describe('VHomeMadeProductsComponent', () => {
  let component: VHomeMadeProductsComponent;
  let fixture: ComponentFixture<VHomeMadeProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VHomeMadeProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VHomeMadeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
