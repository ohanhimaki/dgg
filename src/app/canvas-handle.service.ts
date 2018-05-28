import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanvasHandleService {




  constructor() { }

  public context: CanvasRenderingContext2D;

  givectx(){
    return this.context;
  }

}
