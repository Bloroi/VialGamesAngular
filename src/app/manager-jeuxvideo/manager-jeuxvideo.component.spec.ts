import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerJeuxvideoComponent } from './manager-jeuxvideo.component';

describe('ManagerJeuxvideoComponent', () => {
  let component: ManagerJeuxvideoComponent;
  let fixture: ComponentFixture<ManagerJeuxvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerJeuxvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerJeuxvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
