import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreEditingComponent } from './score-editing.component';

describe('ScoreEditingComponent', () => {
  let component: ScoreEditingComponent;
  let fixture: ComponentFixture<ScoreEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
