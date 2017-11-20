import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierJeuxvideoComponent } from './modifier-jeuxvideo.component';

describe('ModifierJeuxvideoComponent', () => {
  let component: ModifierJeuxvideoComponent;
  let fixture: ComponentFixture<ModifierJeuxvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierJeuxvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierJeuxvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
