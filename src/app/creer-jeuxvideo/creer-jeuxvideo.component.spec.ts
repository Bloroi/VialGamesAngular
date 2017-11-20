import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerJeuxvideoComponent } from './creer-jeuxvideo.component';

describe('CreerJeuxvideoComponent', () => {
  let component: CreerJeuxvideoComponent;
  let fixture: ComponentFixture<CreerJeuxvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerJeuxvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerJeuxvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
