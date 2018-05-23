import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreGraphicsComponent } from './score-graphics.component';

describe('ScoreGraphicsComponent', () => {
  let component: ScoreGraphicsComponent;
  let fixture: ComponentFixture<ScoreGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
