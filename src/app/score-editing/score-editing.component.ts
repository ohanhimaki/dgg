import { Component, OnInit } from '@angular/core';

import { ScoreGraphicsComponent } from '../score-graphics/score-graphics.component';

@Component({
  selector: 'app-score-editing',
  templateUrl: './score-editing.component.html',
  styleUrls: ['./score-editing.component.css']
})
export class ScoreEditingComponent implements OnInit {

  constructor(private scoreGraphicsComponent: ScoreGraphicsComponent) { }

  ngOnInit() {
  }

  changeTools(){
    this.scoreGraphicsComponent.changeTools();
  }
}
