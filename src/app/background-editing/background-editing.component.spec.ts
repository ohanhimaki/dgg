import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundEditingComponent } from './background-editing.component';

describe('BackgroundEditingComponent', () => {
  let component: BackgroundEditingComponent;
  let fixture: ComponentFixture<BackgroundEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
