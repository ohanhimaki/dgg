import { Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';

import {CanvasHandleService} from '../canvas-handle.service'


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements AfterViewInit {

  @ViewChild('myCanvas') canvasRef: ElementRef;

private context: CanvasRenderingContext2D;


  constructor(private canvasHandle: CanvasHandleService) { }


  ngAfterViewInit(): void {
    console.log(this.context);
    this.context = (<HTMLCanvasElement>this.canvasRef.nativeElement).getContext("2d");
    this.draw();
    this.canvasHandle.context = this.context;


  }

  private draw() {
    console.log(this.context);
    this.context.beginPath();
    this.context.moveTo(0,0);
    this.context.lineTo(300,150);
    this.context.stroke();
  }


  private giveCanvas(){
    console.log(this.context);
    console.log("voi vittu toimi");
    return this.context;
    this.draw();

  }

  private draw2() {
    console.log(this.context);
    this.context.beginPath();
    this.context.moveTo(0,30);
    this.context.lineTo(300,150);
    this.context.stroke();
  }







}
