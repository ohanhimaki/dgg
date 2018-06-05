import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hole-info-editing',
  templateUrl: './hole-info-editing.component.html',
  styleUrls: ['./hole-info-editing.component.css']
})
export class HoleInfoEditingComponent implements OnInit {

  constructor() { }

  public hideInfoShowOptions = true;
  public hideDataInput = true;
  public hideLayoutEditor = true;
  public hideStartProcessing = true;

  ngOnInit() {
  }

  @Input('holeNumbersCheck') holeNumbersCheck : boolean = true;
  @Input('holeParsCheck') holeParsCheck : boolean = true;
  @Input('holeDistancesCheck') holeDistancesCheck : boolean = true;

  @Input('holePars') player1Name: string;
  @Input('holeNumbers') holeNumbers: string;
  @Input('holeDistance') holeDistance: string;

}
