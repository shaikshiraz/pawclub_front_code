import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VFoundPetComponent } from './v-found-pet.component';

describe('VFoundPetComponent', () => {
  let component: VFoundPetComponent;
  let fixture: ComponentFixture<VFoundPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VFoundPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VFoundPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
