import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { CanvasComponent } from '../canvas/canvas.component';
import { DisplayerService } from '../displayer.service';
import { ScoreGraphicsComponent } from '../score-graphics/score-graphics.component';
import { CanvasComponent } from '../canvas/canvas.component';
import {CanvasHandleService} from '../canvas-handle.service'


@Component({
  selector: 'app-background-editing',
  templateUrl: './background-editing.component.html',
  styleUrls: ['./background-editing.component.css']
})

 // private backgroundEditing: BackgroundEditing



export class BackgroundEditingComponent implements OnInit {

  constructor(public scoreGraphicsComponent: ScoreGraphicsComponent; private canvasHandle: CanvasHandleService) { }

    title = 'Background editing tools';

  // Variables for HIDE
  public hideResolution = true;
  public hideRectangle = true;
  public hideTexttools = true;
  public hideImageAdd = true;


  ngOnInit() {


  }


  changeTools(){
    this.scoreGraphicsComponent.changeTools();
    console.log(this.ctx);
    console.log(this.canvasHandle.givectx());
    this.ctx = this.canvasHandle.givectx();
    this.drawRect();



  }

// INPUT
  @Input('rectanglePosistionX') rectanglePosistionX: string;
  @Input('rectanglePosistionY') rectanglePosistionY: string;
  @Input('rectangleWidth') rectangleWidth: string;
  @Input('rectangleHeight') rectangleHeight: string;
  @Input('rectangleColor') rectangleColor: string;
  @Input('rectangleAlpha') rectangleAlpha: string;

  // Features


  drawRect() {

    this.ctx.beginPath();
    	this.ctx.globalAlpha = 100;
    	this.ctx.fillStyle = '#' + "f5f5f5";
    	this.ctx.rect(0, 0, 300, 300);
    	this.ctx.fill();


    }



}
