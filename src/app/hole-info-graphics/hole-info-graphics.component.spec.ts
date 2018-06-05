import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoleInfoGraphicsComponent } from './hole-info-graphics.component';

describe('HoleInfoGraphicsComponent', () => {
  let component: HoleInfoGraphicsComponent;
  let fixture: ComponentFixture<HoleInfoGraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoleInfoGraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoleInfoGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
