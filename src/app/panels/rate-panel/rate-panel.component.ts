import { Component, Input, OnInit } from '@angular/core';

import { Cryptocurr } from '../../view-models/cryptocurr';

@Component({
  selector: 'app-rate-panel',
  templateUrl: './rate-panel.component.html',
  styleUrls: ['./rate-panel.component.css']
})
export class RatePanelComponent implements OnInit {

  @Input() cryptocurr: Cryptocurr;
  @Input() index = 1;

  constructor() { }

  ngOnInit() {
  }

}
