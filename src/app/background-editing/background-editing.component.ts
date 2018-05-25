import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { CanvasComponent } from '../canvas/canvas.component';
import { DisplayerService } from '../displayer.service';
import { ScoreGraphicsComponent } from '../score-graphics/score-graphics.component';
import { CanvasComponent } from '../canvas/canvas.component';



@Component({
  selector: 'app-background-editing',
  templateUrl: './background-editing.component.html',
  styleUrls: ['./background-editing.component.css'],
  providers: [CanvasComponent]
})

 // private backgroundEditing: BackgroundEditing



export class BackgroundEditingComponent implements OnInit {

  constructor(private scoreGraphicsComponent: ScoreGraphicsComponent; private canvasComponent: CanvasComponent) { }

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
    this.ctx = this.canvasComponent.giveCanvas();
    console.log(this.ctx);


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

    	ctx.beginPath();
    	ctx.globalAlpha = 100;
    	ctx.fillStyle = '#' + f5f5f5;
    	ctx.rect(0, 0, 300, 300);
    	ctx.fill();

    }



}
