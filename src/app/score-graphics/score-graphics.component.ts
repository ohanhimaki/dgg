import { Component, OnInit } from '@angular/core';

import {DisplayerService} from '../displayer.service';

@Component({
  selector: 'app-score-graphics',
  templateUrl: './score-graphics.component.html',
  styleUrls: ['./score-graphics.component.css']
})
export class ScoreGraphicsComponent implements OnInit {

  constructor(private displayerService: DisplayerService) { }

  private hideBackgroundEditing = false;

  changeTools(){
    this.hideBackgroundEditing = !this.hideBackgroundEditing;
  }

  ngOnInit() {
  }

}
