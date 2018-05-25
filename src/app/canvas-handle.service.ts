import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanvasHandleService {




  constructor() { }

  private context: CanvasRenderingContext2D;

  givectx(){
    return this.context;
  }

}
