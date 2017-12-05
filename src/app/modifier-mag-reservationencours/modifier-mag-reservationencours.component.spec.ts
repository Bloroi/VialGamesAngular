import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMagReservationencoursComponent } from './modifier-mag-reservationencours.component';

describe('ModifierMagReservationencoursComponent', () => {
  let component: ModifierMagReservationencoursComponent;
  let fixture: ComponentFixture<ModifierMagReservationencoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierMagReservationencoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierMagReservationencoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
