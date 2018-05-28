import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { CanvasComponent } from '../canvas/canvas.component';
import { DisplayerService } from '../displayer.service';
import { ScoreGraphicsComponent } from '../score-graphics/score-graphics.component';
import {CanvasHandleService} from '../canvas-handle.service'


@Component({
  selector: 'app-background-editing',
  templateUrl: './background-editing.component.html',
  styleUrls: ['./background-editing.component.css']
})

 // private backgroundEditing: BackgroundEditing



export class BackgroundEditingComponent implements OnInit {

  constructor(public scoreGraphicsComponent: ScoreGraphicsComponent, private canvasHandle: CanvasHandleService) { }


    title = 'Background editing tools';
    private let savedCanvas = [];
    private let redoCanvas = [];
    private ctx: CanvasRenderingContext2D;
  // Variables for HIDE
  public hideResolution = true;
  public hideRectangle = true;
  public hideTexttools = true;
  public hideImageAdd = true;


  ngOnInit() {


      this.canvasResolutionHeight = "1080";
      this.canvasResolutionWidth = "1920";

      setTimeout(()=>{
        this.saveCanvas();
      }, 300);


  }


  changeTools(){
    this.scoreGraphicsComponent.changeTools();
    console.log(this.ctx);
    console.log(this.canvasHandle.givectx());
    this.saveCanvas();


  }

// INPUT
  @Input('rectanglePosistionX') rectanglePosistionX: string;
  @Input('rectanglePosistionY') rectanglePosistionY: string;
  @Input('rectangleWidth') rectangleWidth: string;
  @Input('rectangleHeight') rectangleHeight: string;
  @Input('rectangleColor') rectangleColor: string;
  @Input('rectangleAlpha') rectangleAlpha: string;
  @Input('canvasResolutionWidth') canvasResolutionWidth: string;
  @Input('canvasResolutionHeight') canvasResolutionHeight: string;


  // Features
  saveCanvas(){
  this.ctx = this.canvasHandle.givectx();
  let tmpvar = this.ctx.getImageData(0, 0, this.canvasResolutionWidth, this.canvasResolutionHeight);
	this.savedCanvas.push(tmpvar);
}

refreshCanvas(){
  this.ctx.clearRect(0, 0, this.canvasResolutionWidth, this.canvasResolutionHeight);
  this.ctx.putImageData(this.savedCanvas[this.savedCanvas.length - 1], 0, 0);
}

  canvasResolution(){
  this.ctx.canvas.width = this.canvasResolutionWidth;
  this.ctx.canvas.height = this.canvasResolutionHeight;
}


  drawRect() {

    this.refreshCanvas();

    this.ctx.beginPath();
    	this.ctx.globalAlpha = this.rectangleAlpha/100;
    	this.ctx.fillStyle = '#' + "f5f5f5";
    	this.ctx.rect(this.rectanglePosistionX, this.rectanglePosistionY, this.rectangleWidth, this.rectangleHeight);
    	this.ctx.fill();


    }



}
