import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMembresAdminComponent } from './page-membres-admin.component';

describe('PageMembresAdminComponent', () => {
  let component: PageMembresAdminComponent;
  let fixture: ComponentFixture<PageMembresAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMembresAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMembresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
