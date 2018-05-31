import { Component, OnInit, Input } from '@angular/core';

import * as JSZip from 'jszip';

import { ScoreGraphicsComponent } from '../score-graphics/score-graphics.component';
import { CanvasHandleService } from '../canvas-handle.service'

@Component({
  selector: 'app-score-editing',
  templateUrl: './score-editing.component.html',
  styleUrls: ['./score-editing.component.css']
})
export class ScoreEditingComponent implements OnInit {

  constructor(private scoreGraphicsComponent: ScoreGraphicsComponent, private canvasHandle: CanvasHandleService) { }

  title = 'Info import and placing tools';
  private ctx: CanvasRenderingContext2D;
  private zip = new JSZip();

  public hideDataInput = true;
  public hideLayoutEditor = true;
  public hideStartProcessing = true;

  ngOnInit() {

  }

  changeTools() {
    this.scoreGraphicsComponent.changeTools();
  }

  @Input('playersAmount') playersAmount: number = 3;
  @Input('holePars') holePars: string;
  @Input('player1Name') player1Name: string;
  @Input('player1Scores') player1Scores: string;
  @Input('player2Name') player2Name: string;
  @Input('player2Scores') player2Scores: string;
  @Input('player3Name') player3Name: string;
  @Input('player3Scores') player3Scores: string;
  @Input('player4Name') player4Name: string;
  @Input('player4Scores') player4Scores: string;
  @Input('player5Name') player5Name: string;
  @Input('player5Scores') player5Scores: string;
  @Input('player6Name') player6Name: string;
  @Input('player6Scores') player6Scores: string;

  @Input('playersDirections') playersDirections: string = "ver";
  @Input('scorePosX') scorePosX: number = 100;
  @Input('scorePosY') scorePosY: number = 100;
  @Input('scorePlayerPlayer') scorePlayerPlayer: number = 100;
  @Input('scoreNameHole') scoreNameHole: number = 100;
  @Input('scoreHoleTotal') scoreHoleTotal: number = 100;
  @Input('scoreNameSize') scoreNameSize: number = 100;
  @Input('scoreNameFont') scoreNameFont: string = "Arial";
  @Input('scoreNameColor') scoreNameColor: string = "#ffffff";
  @Input('scoreHoleScoreSize') scoreHoleScoreSize: number = 100;
  @Input('scoreHoleScoreFont') scoreHoleScoreFont: string = "Arial";
  @Input('scoreHoleScoreColor') scoreHoleScoreColor: string = "#ffffff";
  @Input('scoreTotalScoreSize') scoreTotalScoreSize: number = 100;
  @Input('scoreTotalScoreFont') scoreTotalScoreFont: string = "Arial";
  @Input('scoreTotalScoreColor') scoreTotalScoreColor: string = "#ffffff";



  scoreDirection(callback) {
    if (this.playersDirections = "ver") {
      this.writeScoreVer(callback);
    }
    else {
      this.writeScoreHor(callback);
    }
  }

  writeScoreVer(callback){

  }

  writeScoreHor(callback){

  }



  zipMakerCaller() {

  }

}
