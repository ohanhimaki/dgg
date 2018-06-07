import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { CanvasComponent } from '../canvas/canvas.component';
import { DisplayerService } from '../displayer.service';
import { CanvasHandleService } from '../canvas-handle.service';


@Component({
  selector: 'app-background-editing',
  templateUrl: './background-editing.component.html',
  styleUrls: ['./background-editing.component.css']
})

// private backgroundEditing: BackgroundEditing



export class BackgroundEditingComponent implements OnInit {

  constructor(private canvasHandle: CanvasHandleService) { }

  // title
  title = 'Background editing tools';
  // Declare array for savedcanvases and context variable
  private savedCanvas = [];
  private redoCanvasa = [];
  private ctx: CanvasRenderingContext2D;
  private imageToCanvas: HTMLImageElement;
  // Variables for HIDE
  public hideResolution = true;
  public hideRectangle = true;
  public hideAddText = true;
  public hideImageAdd = true;

  @Input('rectanglePosistionX') rectanglePosistionX = 0;
  @Input('rectanglePosistionY') rectanglePosistionY = 0;
  @Input('rectangleWidth') rectangleWidth = 100;
  @Input('rectangleHeight') rectangleHeight = 100;
  @Input('rectangleColor') rectangleColor = '#000000';
  @Input('rectangleAlpha') rectangleAlpha = 80;
  @Input('canvasResolutionWidth') canvasResolutionWidth = 1920;
  @Input('canvasResolutionHeight') canvasResolutionHeight = 1080;

  @Input('addTextText') addTextText = '';
  @Input('addTextPosX') addTextPosX = 100;
  @Input('addTextPosY') addTextPosY = 100;
  @Input('addTextSize') addTextSize = 100;
  @Input('addTextFont') addTextFont = 'Arial';
  @Input('addTextColor') addTextColor = '#FFFFFF';
  @Input('addTextAlpha') addTextAlpha = 100;

  @Input('addImagePosX') addImagePosX = 100;
  @Input('addImagePosY') addImagePosY = 100;
  @Input('addImageWidth') addImageWidth = 100;
  @Input('addImageHeight') addImageHeight = 100;


  ngOnInit() {

    setTimeout(() => {
      this.saveCanvas();
    }, 300);


  }

  // Features
  saveCanvas() {
    this.ctx = this.canvasHandle.givectx();
    this.redoCanvasa = [];
    const tmpvar = this.ctx.getImageData(0, 0, this.canvasResolutionWidth, this.canvasResolutionHeight);
    this.canvasHandle.lastSavedCanvas = tmpvar;
    this.savedCanvas.push(tmpvar);
  }

  refreshCanvas() {
    this.ctx.clearRect(0, 0, this.canvasResolutionWidth, this.canvasResolutionHeight);
    this.ctx.putImageData(this.savedCanvas[this.savedCanvas.length - 1], 0, 0);
  }

  redoCanvas() {
    if (this.redoCanvasa.length > 0) {
      this.savedCanvas.push(this.redoCanvasa.pop());
    }

    this.refreshCanvas();
  }

  undoCanvas() {
    if (this.savedCanvas.length > 1) {
      this.redoCanvasa.push(this.savedCanvas.pop());
    }
    this.refreshCanvas();
  }

  canvasResolution() {
    this.ctx.canvas.width = this.canvasResolutionWidth;
    this.ctx.canvas.height = this.canvasResolutionHeight;
  }


  drawRect() {
    this.refreshCanvas();

    this.ctx.beginPath();
    this.ctx.globalAlpha = this.rectangleAlpha / 100;
    this.ctx.fillStyle = this.rectangleColor;
    this.ctx.rect(this.rectanglePosistionX, this.rectanglePosistionY, this.rectangleWidth, this.rectangleHeight);
    this.ctx.fill();

  }

  addText() {
    this.refreshCanvas();
    this.ctx.globalAlpha = this.addTextAlpha / 100;
    this.ctx.font = this.addTextSize + 'px ' + this.addTextFont;
    this.ctx.fillStyle = this.addTextColor;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(this.addTextText, this.addTextPosX, this.addTextPosY);

  }



  // let file = event.target.files[0];
  // this.imageToCanvas = event.target.files[0];




  imagePlacing() {
    if (this.imageToCanvas) {


      this.refreshCanvas();
      this.ctx.globalAlpha = 1;
      this.ctx.drawImage(this.imageToCanvas, this.addImagePosX, this.addImagePosY,
        this.imageToCanvas.width * this.addImageWidth / 100, this.imageToCanvas.height * this.addImageHeight / 100);
    }

  }

  addImage(e): void {
    const self = this;

    const imagereader = new FileReader();
    imagereader.onload = (event: any) => {
      const newimg = new Image();
      newimg.onload = () => {

      };
      newimg.src = event.target.result;
      self.imageToCanvas = newimg;
      setTimeout(() => {
        self.imagePlacing();
      }, 300);

    };
    imagereader.readAsDataURL(e.target.files[0]);

  }



}
