import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VPhotographyComponent } from './v-photography.component';

describe('VPhotographyComponent', () => {
  let component: VPhotographyComponent;
  let fixture: ComponentFixture<VPhotographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VPhotographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VPhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
