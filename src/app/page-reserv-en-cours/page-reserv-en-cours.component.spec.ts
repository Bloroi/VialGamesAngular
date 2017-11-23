import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReservEnCoursComponent } from './page-reserv-en-cours.component';

describe('PageReservEnCoursComponent', () => {
  let component: PageReservEnCoursComponent;
  let fixture: ComponentFixture<PageReservEnCoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageReservEnCoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReservEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
