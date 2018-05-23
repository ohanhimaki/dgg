import { Component, OnInit, Input } from '@angular/core';

import { CanvasComponent } from '../canvas/canvas.component';
import * as BackgroundEditing from '../background-editing/background-editing.js';
import * as ColorPicker from '../scripts/jscolor.js';

@Component({
  selector: 'app-background-editing',
  templateUrl: './background-editing.component.html',
  styleUrls: ['./background-editing.component.css']
})





export class BackgroundEditingComponent implements OnInit {

  constructor() { }

// Variables for HIDE
public hideResolution = true;
public hideRectangle = true;
public hideTexttools = true;
public hideImageAdd = true;

title = 'Tour of Heroes';

  ngOnInit() {
  }




@Input('rectanglePosistionX') rectanglePosistionX: string;
@Input('rectanglePosistionY') rectanglePosistionY: string;
@Input('rectangleWidth') rectangleWidth: string;
@Input('rectangleHeight') rectangleHeight: string;
@Input('rectangleColor') rectangleColor: string;
@Input('rectangleAlpha') rectangleAlpha: string;



}
