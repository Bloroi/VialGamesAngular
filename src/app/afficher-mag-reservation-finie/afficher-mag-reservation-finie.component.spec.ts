import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherMagReservationFinieComponent } from './afficher-mag-reservation-finie.component';

describe('AfficherMagReservationFinieComponent', () => {
  let component: AfficherMagReservationFinieComponent;
  let fixture: ComponentFixture<AfficherMagReservationFinieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherMagReservationFinieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherMagReservationFinieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
