import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerMagasinierComponent } from './manager-magasinier.component';

describe('ManagerMagasinierComponent', () => {
  let component: ManagerMagasinierComponent;
  let fixture: ComponentFixture<ManagerMagasinierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerMagasinierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerMagasinierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
