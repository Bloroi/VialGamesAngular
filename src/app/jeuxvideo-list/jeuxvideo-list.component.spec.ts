import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeuxvideoListComponent } from './jeuxvideo-list.component';

describe('JeuxvideoListComponent', () => {
  let component: JeuxvideoListComponent;
  let fixture: ComponentFixture<JeuxvideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeuxvideoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeuxvideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
