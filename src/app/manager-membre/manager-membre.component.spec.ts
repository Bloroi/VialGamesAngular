import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerMembreComponent } from './manager-membre.component';

describe('ManagerMembreComponent', () => {
  let component: ManagerMembreComponent;
  let fixture: ComponentFixture<ManagerMembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerMembreComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
