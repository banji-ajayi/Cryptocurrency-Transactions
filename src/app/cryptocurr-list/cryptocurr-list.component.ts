import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { Cryptocurr } from '../view-models/cryptocurr';

@Component({
  selector: 'app-cryptocurr-list',
  templateUrl: './cryptocurr-list.component.html',
  styleUrls: ['./cryptocurr-list.component.css']
})
export class CryptocurrListComponent implements OnInit {

  allCryptocurrs: Array<Cryptocurr>;
  count = 0;
  cryptocurrs: Array<Cryptocurr>;

  constructor(private dataService: AppDataService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.dataService.getCryptocurrs().subscribe(
      cryptocurrs => {
        this.allCryptocurrs = cryptocurrs;

        this.count = this.route.snapshot.params['count'];
        this.updateList();
      }
    );

    this.route.params.subscribe(params => {
      this.count = params['count'];
      this.updateList();
     });
  }

  updateList() {
    this.cryptocurrs = this.count>0?this.allCryptocurrs.slice(0, this.count): this.allCryptocurrs;
  }
}

