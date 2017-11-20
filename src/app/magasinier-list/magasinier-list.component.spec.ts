import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagasinierListComponent } from './magasinier-list.component';

describe('MagasinierListComponent', () => {
  let component: MagasinierListComponent;
  let fixture: ComponentFixture<MagasinierListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagasinierListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagasinierListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
