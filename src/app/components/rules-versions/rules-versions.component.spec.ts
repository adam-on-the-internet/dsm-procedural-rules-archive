import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RulesVersionsComponent } from './rules-versions.component';

describe('RulesVersionsComponent', () => {
  let component: RulesVersionsComponent;
  let fixture: ComponentFixture<RulesVersionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RulesVersionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RulesVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
