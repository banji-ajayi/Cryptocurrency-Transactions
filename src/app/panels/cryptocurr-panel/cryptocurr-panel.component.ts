import { Component, Input, OnInit } from '@angular/core';

import { Cryptocurr } from '../../view-models/cryptocurr';

@Component({
  selector: 'app-cryptocurr-panel',
  templateUrl: './cryptocurr-panel.component.html',
  styleUrls: ['./cryptocurr-panel.component.css']
})
export class CryptocurrPanelComponent implements OnInit {

  @Input() cryptocurr: Cryptocurr;
  @Input() index = 1;

  constructor() { }

  ngOnInit() {
  }

}
