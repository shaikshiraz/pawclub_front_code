import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VKennelComponent } from './v-kennel.component';

describe('VKennelComponent', () => {
  let component: VKennelComponent;
  let fixture: ComponentFixture<VKennelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VKennelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VKennelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
