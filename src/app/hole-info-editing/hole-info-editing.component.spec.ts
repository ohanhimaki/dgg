import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoleInfoEditingComponent } from './hole-info-editing.component';

describe('HoleInfoEditingComponent', () => {
  let component: HoleInfoEditingComponent;
  let fixture: ComponentFixture<HoleInfoEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoleInfoEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoleInfoEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
