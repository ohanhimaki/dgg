import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanvasHandleService {




  constructor() { }

  public lastSavedCanvas: ImageData;
  public context: CanvasRenderingContext2D;

  refreshCanvas() {
    if(this.context.canvas){
      this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
      this.context.putImageData(this.lastSavedCanvas, 0, 0);
    }

  }

  givectx(){
    return this.context;
  }

}
