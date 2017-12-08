import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifMdpMembreComponent } from './modif-mdp-membre.component';

describe('ModifMdpMembreComponent', () => {
  let component: ModifMdpMembreComponent;
  let fixture: ComponentFixture<ModifMdpMembreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifMdpMembreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifMdpMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
