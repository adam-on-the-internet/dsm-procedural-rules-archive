import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRulesComponent } from './current-rules.component';

describe('CurrentRulesComponent', () => {
  let component: CurrentRulesComponent;
  let fixture: ComponentFixture<CurrentRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
