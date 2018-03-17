import { Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { Cryptocurr } from '../view-models/cryptocurr';
import { FieldDefinition } from '../../fw/dynamic-forms/field-definition';

@Component({
  selector: 'app-cryptocurr-detail',
  templateUrl: './cryptocurr-detail.component.html',
  styleUrls: ['./cryptocurr-detail.component.css']
})
export class CryptocurrDetailComponent implements OnInit {

  cryptocurr: Cryptocurr;
  cryptocurrDefinition: Array<FieldDefinition> = [
    {
      key: 'id',
      type: 'number',
      isId: true,
      label: 'Id',
      required: true
    },
    { key: 'name',
      type: 'string',
      isId: false,
      label: 'Cryptocurr Name',
      required: true
    },
    {
      key: 'epiIndex',
      type: 'number',
      isId: false,
      label: 'EPI Index',
      required: true
    }
  ];
  errorMessage: string;
  operation: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dataService: AppDataService) { }

  createCryptocurr(cryptocurr: Cryptocurr) {
    cryptocurr.id = 0;
    this.errorMessage = null;
    this.dataService.createCryptocurr(cryptocurr).subscribe(
      c => this.router.navigate(['/authenticated/cryptocurr-maint']),
      err => this.errorMessage = 'Error creating currency'
      );
  }

  ngOnInit() {
    this.operation = this.route.snapshot.params['operation'];

    if (this.operation === 'create') {
      this.cryptocurr = { id: 0, name: "", epiIndex: null };
    }
    // else{ // try changing id to id here and adding it in models
    //   this.dataService.getCryptocurr(this.route.snapshot.params['id'])
    //     .subscribe((cryptocurr: Cryptocurr) => this.cryptocurr = cryptocurr);


    else{ // try changing id to id here and adding it in models
      this.dataService.getCryptocurr(this.route.params['id'])
        .subscribe((cryptocurr: Cryptocurr) => this.cryptocurr = cryptocurr);

  }

}

  updateCryptocurr(cryptocurr: Cryptocurr) {
    this.errorMessage = null;
    this.dataService.updateCryptocurr(cryptocurr).subscribe(
      c => this.router.navigate(['/authenticated/cryptocurr-maint']),
      err => this.errorMessage = 'Error updating cryptocurrency'
      );
  }

}
