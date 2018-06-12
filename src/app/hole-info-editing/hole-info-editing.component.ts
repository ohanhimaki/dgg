import { Component, OnInit, Input } from '@angular/core';

import * as JSZip from 'jszip';
import {saveAs} from 'file-saver';

import { CanvasHandleService } from '../canvas-handle.service';

@Component({
  selector: 'app-hole-info-editing',
  templateUrl: './hole-info-editing.component.html',
  styleUrls: ['./hole-info-editing.component.css']
})
export class HoleInfoEditingComponent implements OnInit {

  constructor(private canvasHandle: CanvasHandleService) { }

  title = 'Info import and placing tools';
  private ctx: CanvasRenderingContext2D;
  private zip = new JSZip();
  private hole = 0;

  public hideInfoShowOptions = true;
  public hideDataInput = true;
  public hideLayoutEditor = true;
  public hideStartProcessing = true;

  @Input('holeNumbersCheck') holeNumbersCheck  = true;
  @Input('holeParsCheck') holeParsCheck  = true;
  @Input('holeDistancesCheck') holeDistancesCheck  = true;
  @Input('holeDistancesUnit') holeDistancesUnit  = true;
  @Input('holeDistancesBoth') holeDistancesBoth  = false;

  @Input('holePars') holePars: string;
  @Input('holeNumbers') holeNumbers: string;
  @Input('holeDistances') holeDistances: string;

  @Input('holeNumbersPosX') holeNumbersPosX = 100;
  @Input('holeNumbersPosY') holeNumbersPosY = 100;
  @Input('holeParsPosX') holeParsPosX = 300;
  @Input('holeParsPosY') holeParsPosY = 50;
  @Input('holeDistancesPosX') holeDistancesPosX = 300;
  @Input('holeDistancesPosY') holeDistancesPosY = 150;

  @Input('holeDistancesBothPosX') holeDistancesBothPosX = 300;
  @Input('holeDistancesBothPosY') holeDistancesBothPosY = 250;

  @Input('holeNumbersSize') holeNumbersSize = 80;
  @Input('holeNumbersFont') holeNumbersFont = 'Arial';
  @Input('holeNumbersColor') holeNumbersColor = '#ffffff';

  @Input('holeParsSize') holeParsSize = 80;
  @Input('holeParsFont') holeParsFont = 'Arial';
  @Input('holeParsColor') holeParsColor = '#ffffff';

  @Input('holeDistancesSize') holeDistancesSize = 80;
  @Input('holeDistancesFont') holeDistancesFont = 'Arial';
  @Input('holeDistancesColor') holeDistancesColor = '#ffffff';

  @Input('holeDistancesBothSize') holeDistancesBothSize = 80;
  @Input('holeDistancesBothFont') holeDistancesBothFont = 'Arial';
  @Input('holeDistancesBothColor') holeDistancesBothColor = '#ffffff';

  public holeParsSeparated = [];
  public holeNumbersSeparated = [];
  public holeDistancesSeparated = [];

  ngOnInit() {
  }

  writeHoleInfos(callback?) {

    this.canvasHandle.refreshCanvas();
    this.ctx = this.canvasHandle.context;

    this.ctx.globalAlpha = 1;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';

    let distanceConverted = 0;
    let distanceUnit = 'm';
    let distanceUnitBoth = 'ft';
    if (!this.holeDistancesUnit) {
      distanceUnit = 'ft';
      distanceUnitBoth = 'm';
    }


    if (this.holeNumbersCheck) {
      if (!this.holeNumbersSeparated[this.hole]) {
        this.holeNumbersSeparated.push(this.hole + 1);
      }
    this.ctx.font = this.holeNumbersSize + 'px ' + this.holeNumbersFont;
    this.ctx.fillStyle = this.holeNumbersColor;
    this.ctx.fillText(this.holeNumbersSeparated[this.hole], this.holeNumbersPosX, this.holeNumbersPosY);
  }
  if (this.holeParsCheck) {
    if (!this.holeParsSeparated[this.hole]) {
      this.holeParsSeparated.push(3);
    }

    this.ctx.font = this.holeParsSize + 'px ' + this.holeParsFont;
    this.ctx.fillStyle = this.holeParsColor;
    this.ctx.fillText(this.holeParsSeparated[this.hole], this.holeParsPosX, this.holeParsPosY);
  }
  if (this.holeDistancesCheck) {
    if (!this.holeDistancesSeparated[this.hole]) {
      this.holeDistancesSeparated.push(' ');
    }
    this.ctx.font = this.holeDistancesSize + 'px ' + this.holeDistancesFont;
    this.ctx.fillStyle = this.holeDistancesColor;
    this.ctx.fillText(this.holeDistancesSeparated[this.hole] + distanceUnit, this.holeDistancesPosX, this.holeDistancesPosY);
  }

  if (this.holeDistancesBoth) {
    if (!this.holeDistancesSeparated[this.hole]) {
      this.holeDistancesSeparated.push(' ');
    }
    if (this.holeDistancesUnit) {
      distanceConverted = this.holeDistancesSeparated[this.hole] * 3.28084;

    } else {
      distanceConverted = this.holeDistancesSeparated[this.hole] * 0.3048;
    }


    this.ctx.font = this.holeDistancesBothSize + 'px ' + this.holeDistancesBothFont;
    this.ctx.fillStyle = this.holeDistancesBothColor;
    this.ctx.fillText(Math.round(distanceConverted) + distanceUnitBoth, this.holeDistancesBothPosX, this.holeDistancesBothPosY);
  }

    // tslint:disable-next-line:no-unused-expression
    callback && callback();
  }

  inputSeparator(input) {
    const tmpInput = input.split(/[\s,\t]+/);
    return tmpInput;
  }


  zipMakerCaller() {
    const m = Math.max(this.holeParsSeparated.length, this.holeNumbersSeparated.length, this.holeDistancesSeparated.length);
    if (this.hole < m) {
      this.writeHoleInfos(() => {
        this.hole++;
        this.zipMaker();

      });
    } else {
      setTimeout(() => {
        this.saveZip();
        this.hole = 0;
      }, 1000);

    }

  }

  zipMaker() {
    if (this.hole > 0) {
      this.ctx.canvas.toBlob((blob) => {
        this.zip.file('holeinfo' + this.hole + '.png', blob);
        setTimeout(() => {
          this.zipMakerCaller();

        }, 500);
      });
    }
  }

  saveZip() {
    this.zip.generateAsync({
      type: 'blob'
    })
    .then((content) => {
      saveAs(content, 'holeinfos.zip');
    });

  }

}
