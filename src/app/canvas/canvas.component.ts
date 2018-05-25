import { Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';

import {BackgroundEditingComponent} from '../background-editing/background-editing.component'


@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements AfterViewInit {
  @ViewChild('myCanvas') canvasRef: ElementRef;

  private context: CanvasRenderingContext2D;

  constructor() { }


  ngAfterViewInit() {

    this.context = (this.canvasRef.nativeElement as HTMLCanvasElement).getContext("2d");


  }

  private draw() {
    console.log(this.context);
    this.context.beginPath();
    this.context.moveTo(0,0);
    this.context.lineTo(300,150);
    this.context.stroke();
  }


  giveCanvas(){
    console.log(this.context);
    return this.context;
    this.draw();

  }





}
