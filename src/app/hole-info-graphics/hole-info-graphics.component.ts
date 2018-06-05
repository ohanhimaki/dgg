import { Component, OnInit } from '@angular/core';

import {DisplayerService} from '../displayer.service';

@Component({
  selector: 'app-hole-info-graphics',
  templateUrl: './hole-info-graphics.component.html',
  styleUrls: ['./hole-info-graphics.component.css']
})
export class HoleInfoGraphicsComponent implements OnInit {

  constructor() { }

  public hideBackgroundEditing = false;

  changeTools(){
    this.hideBackgroundEditing = !this.hideBackgroundEditing;
  }

  ngOnInit() {
  }

}
