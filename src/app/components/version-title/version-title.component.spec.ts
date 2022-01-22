import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionTitleComponent } from './version-title.component';

describe('VersionTitleComponent', () => {
  let component: VersionTitleComponent;
  let fixture: ComponentFixture<VersionTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
