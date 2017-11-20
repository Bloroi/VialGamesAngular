import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerMagasinierComponent } from './creer-magasinier.component';

describe('CreerMagasinierComponent', () => {
  let component: CreerMagasinierComponent;
  let fixture: ComponentFixture<CreerMagasinierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerMagasinierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerMagasinierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
