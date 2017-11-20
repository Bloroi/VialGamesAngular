import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierMagasinierComponent } from './modifier-magasinier.component';

describe('ModifierMagasinierComponent', () => {
  let component: ModifierMagasinierComponent;
  let fixture: ComponentFixture<ModifierMagasinierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierMagasinierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierMagasinierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
