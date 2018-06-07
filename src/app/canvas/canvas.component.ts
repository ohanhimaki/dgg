import { Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';

import {CanvasHandleService} from '../canvas-handle.service';


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
    this.context = (<HTMLCanvasElement>this.canvasRef.nativeElement).getContext('2d');

    this.canvasHandle.context = this.context;


  }














}
