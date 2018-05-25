import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisplayerService {

  public hideBackgroundEditingTools = true;

  constructor() { }
}
