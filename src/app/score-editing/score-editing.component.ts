import { Component, OnInit, Input } from '@angular/core';

import * as JSZip from 'jszip';
import {saveAs} from 'file-saver';

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
  private hole = 0;

  public hideDataInput = true;
  public hideLayoutEditor = true;
  public hideStartProcessing = true;

  ngOnInit() {

  }

  changeTools() {
    this.scoreGraphicsComponent.changeTools();
  }

  @Input('playersAmount') playersAmount: number = 4;
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


  private holeParsSeparated = [];
  private player1ScoresSeparated = [];
  private player2ScoresSeparated = [];
  private player3ScoresSeparated = [];
  private player4ScoresSeparated = [];
  private player5ScoresSeparated = [];
  private player6ScoresSeparated = [];

  private player1ScoresTotalsAfterHole = [];
  private player2ScoresTotalsAfterHole = [];
  private player3ScoresTotalsAfterHole = [];
  private player4ScoresTotalsAfterHole = [];
  private player5ScoresTotalsAfterHole = [];
  private player6ScoresTotalsAfterHole = [];

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
  @Input('holeScoreColorBasedOnScoreSelector') holeScoreColorBasedOnScoreSelector: boolean = true;




  writeScores(callback) {

    this.canvasHandle.refreshCanvas();
    this.ctx = this.canvasHandle.context;
    let scoreYOffset;
    let scoreXOffset;
    let scorePosFixX;
    let scorePosFixY;

    this.ctx.globalAlpha = 1;
    this.ctx.font = this.scoreNameSize + "px " + this.scoreNameFont;
    this.ctx.fillStyle = this.scoreNameColor;
    this.ctx.textBaseline = "middle";

    if (this.playersDirections == "ver") {
      this.ctx.textAlign = "left";
      scoreYOffset = this.scorePlayerPlayer / this.playersAmount - 1;
      scoreXOffset = 0;
    }
    else {
      this.ctx.textAlign = "center";
      scoreYOffset = 0;
      scoreXOffset = this.scorePlayerPlayer / this.playersAmount - 1;
    }

    // player1
    this.ctx.fillText(this.player1Name, this.scorePosX, this.scorePosY);

    if (this.playersAmount > 1) {
      this.ctx.fillText(this.player2Name, this.scorePosX + scoreXOffset * 1, this.scorePosY + scoreYOffset * 1);
    }
    if (this.playersAmount > 2) {
      this.ctx.fillText(this.player3Name, this.scorePosX + scoreXOffset * 2, this.scorePosY + scoreYOffset * 2);
    }
    if (this.playersAmount > 3) {
      this.ctx.fillText(this.player4Name, this.scorePosX + scoreXOffset * 3, this.scorePosY + scoreYOffset * 3);
    }
    if (this.playersAmount > 4) {
      this.ctx.fillText(this.player5Name, this.scorePosX + scoreXOffset * 4, this.scorePosY + scoreYOffset * 4);
    }
    if (this.playersAmount > 5) {
      this.ctx.fillText(this.player6Name, this.scorePosX + scoreXOffset * 5, this.scorePosY + scoreYOffset * 5);
    }

    // hole scores
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";

    this.ctx.font = this.scoreHoleScoreSize + "px " + this.scoreHoleScoreFont;
    this.ctx.fillStyle = this.scoreHoleScoreColor;

    if (this.playersDirections == "ver") {

      scorePosFixX = this.scorePosX + this.scoreNameHole;
      scorePosFixY = this.scorePosY;
      scoreXOffset = 0;
      scoreYOffset = this.scorePlayerPlayer / this.playersAmount - 1;
    }
    else {
      scorePosFixX = this.scorePosX;
      scorePosFixY = this.scorePosY + this.scoreNameHole;
      scoreXOffset = this.scorePlayerPlayer / this.playersAmount - 1;
      scoreYOffset = 0;
    }


    if (this.holeScoreColorBasedOnScoreSelector) {
      this.holeScoreColorBasedOnScore(this.player1ScoresSeparated[this.hole]);

    }
    this.ctx.fillText(this.player1ScoresSeparated[this.hole], scorePosFixX + scoreXOffset * 0, scorePosFixY + scoreYOffset * 0);

    if (this.playersAmount > 1) {
      if (this.holeScoreColorBasedOnScoreSelector) {
        this.holeScoreColorBasedOnScore(this.player2ScoresSeparated[this.hole]);

      }
      this.ctx.fillText(this.player2ScoresSeparated[this.hole], scorePosFixX + scoreXOffset * 1, scorePosFixY + scoreYOffset * 1);
    }
    if (this.playersAmount > 2) {
      if (this.holeScoreColorBasedOnScoreSelector) {
        this.holeScoreColorBasedOnScore(this.player3ScoresSeparated[this.hole]);

      }
      this.ctx.fillText(this.player3ScoresSeparated[this.hole], scorePosFixX + scoreXOffset * 2, scorePosFixY + scoreYOffset * 2);
    }
    if (this.playersAmount > 3) {
      if (this.holeScoreColorBasedOnScoreSelector) {
        this.holeScoreColorBasedOnScore(this.player4ScoresSeparated[this.hole]);

      }
      this.ctx.fillText(this.player4ScoresSeparated[this.hole], scorePosFixX + scoreXOffset * 3, scorePosFixY + scoreYOffset * 3);
    }
    if (this.playersAmount > 4) {
      if (this.holeScoreColorBasedOnScoreSelector) {
        this.holeScoreColorBasedOnScore(this.player5ScoresSeparated[this.hole]);

      }
      this.ctx.fillText(this.player5ScoresSeparated[this.hole], scorePosFixX + scoreXOffset * 4, scorePosFixY + scoreYOffset * 4);
    }
    if (this.playersAmount > 5) {
      if (this.holeScoreColorBasedOnScoreSelector) {
        this.holeScoreColorBasedOnScore(this.player6ScoresSeparated[this.hole]);

      }
      this.ctx.fillText(this.player6ScoresSeparated[this.hole], scorePosFixX + scoreXOffset * 5, scorePosFixY + scoreYOffset * 5);
    }

    //TOTAL Scores

    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";

    this.ctx.font = this.scoreTotalScoreSize + "px " + this.scoreTotalScoreFont;
    this.ctx.fillStyle = this.scoreTotalScoreColor;

    if (this.playersDirections == "ver") {

      scorePosFixX = this.scorePosX + this.scoreNameHole + this.scoreHoleTotal;
      scorePosFixY = this.scorePosY;
      scoreXOffset = 0;
      scoreYOffset = this.scorePlayerPlayer / this.playersAmount - 1;
    }
    else {
      scorePosFixX = this.scorePosX;
      scorePosFixY = this.scorePosY + this.scoreNameHole + this.scoreHoleTotal;
      scoreXOffset = this.scorePlayerPlayer / this.playersAmount - 1;
      scoreYOffset = 0;
    }

    this.ctx.fillText(this.player1ScoresTotalsAfterHole[this.hole], scorePosFixX + scoreXOffset * 0, scorePosFixY + scoreYOffset * 0);

    if (this.playersAmount > 1) {
      this.ctx.fillText(this.player2ScoresTotalsAfterHole[this.hole], scorePosFixX + scoreXOffset * 1, scorePosFixY + scoreYOffset * 1);
    }
    if (this.playersAmount > 2) {
      this.ctx.fillText(this.player3ScoresTotalsAfterHole[this.hole], scorePosFixX + scoreXOffset * 2, scorePosFixY + scoreYOffset * 2);
    }
    if (this.playersAmount > 3) {
      this.ctx.fillText(this.player4ScoresTotalsAfterHole[this.hole], scorePosFixX + scoreXOffset * 3, scorePosFixY + scoreYOffset * 3);
    }
    if (this.playersAmount > 4) {
      this.ctx.fillText(this.player5ScoresTotalsAfterHole[this.hole], scorePosFixX + scoreXOffset * 4, scorePosFixY + scoreYOffset * 4);
    }
    if (this.playersAmount > 5) {
      this.ctx.fillText(this.player6ScoresTotalsAfterHole[this.hole], scorePosFixX + scoreXOffset * 5, scorePosFixY + scoreYOffset * 5);
    }

    callback && callback();

  }

  inputSeparator(input) {
    let tmpInput = input.split(/[\s,\t]+/);
    return tmpInput;
  }

  totalScorePreparer(tmptotalScoreInput) {
    let tmptotalscore = 0;
    let tmptotal = [];
    let tmppush = 0;
    let tmptotalscorepush = "";


    for (let i in tmptotalScoreInput){

      tmppush = tmptotalScoreInput[i] - this.holeParsSeparated[i];
      tmptotalscore += tmppush;

      if(tmptotalscore > 0){
        tmptotalscorepush = "+" + tmptotalscore;
      } else if (tmptotalscore === 0){
        tmptotalscorepush = "par";
      } else {
        tmptotalscorepush = tmptotalscore.toString();
      }

      tmptotal.push(tmptotalscorepush);

    }
    return tmptotal;
  }


  holeScoreColorBasedOnScore(score) {
    if (score < this.holeParsSeparated[this.hole]) {
      this.ctx.fillStyle = "#06CF0B";
    } else if (score > this.holeParsSeparated[this.hole]) {
      this.ctx.fillStyle = "#EB2A2A";
    } else if (score === this.holeParsSeparated[this.hole]) {
      this.ctx.fillStyle = this.scoreHoleScoreColor;
    }

  }







  zipMakerCaller() {
    let m = this.holeParsSeparated.length;
    if (this.hole < m){
      this.writeScores(()=>{
        this.hole++;
        this.zipMaker();

      });
    }
     else {
      setTimeout(()=>{
        this.saveZip();
        this.hole=0;
      }, 1000)

    }

  }

  zipMaker(){
    if (this.hole > 0){
      this.ctx.canvas.toBlob((blob)=>{
        this.zip.file("scoregraphics" + this.hole + ".png", blob)
        setTimeout(()=>{
          this.zipMakerCaller();

        }, 500);
      });
    }
  }

  saveZip(){
    this.zip.generateAsync({
      type: "blob"
    })
    .then((content)=>{
      saveAs(content, "Scoregraphics.zip");
    });

  }

}
