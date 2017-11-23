import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePayementComponent } from './page-payement.component';

describe('PagePayementComponent', () => {
  let component: PagePayementComponent;
  let fixture: ComponentFixture<PagePayementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePayementComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
