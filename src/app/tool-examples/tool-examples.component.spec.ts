import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolExamplesComponent } from './tool-examples.component';

describe('ToolExamplesComponent', () => {
  let component: ToolExamplesComponent;
  let fixture: ComponentFixture<ToolExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
