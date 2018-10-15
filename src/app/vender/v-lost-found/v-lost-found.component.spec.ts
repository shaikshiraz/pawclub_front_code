import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VLostFoundComponent } from './v-lost-found.component';

describe('VLostFoundComponent', () => {
  let component: VLostFoundComponent;
  let fixture: ComponentFixture<VLostFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VLostFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VLostFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
