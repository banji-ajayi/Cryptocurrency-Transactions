import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { Cryptocurr } from '../view-models/cryptocurr';

@Component({
  selector: 'app-cryptocurr-maint',
  templateUrl: './cryptocurr-maint.component.html',
  styleUrls: ['./cryptocurr-maint.component.css']
})
export class CryptocurrMaintComponent {

  cryptocurrs: Array<Cryptocurr>;
  deleteError: string;
  deleteid: number;
  isDeleting = false;

  constructor(private dataService: AppDataService,
              private router: Router) {
    dataService.getCryptocurrs().subscribe((data) =>
    this.cryptocurrs = data);
  }

  cancelDelete() {
    this.isDeleting = false;
    this.deleteid = null;
  }

  createCryptocurr() {
    this.router.navigate(['/authenticated/cryptocurr-detail', 0, 'create']);
  }

  deleteCryptocurr(id: number) {
    this.isDeleting = true;
    this.dataService.deleteCryptocurr(id).subscribe(
      c => this.cancelDelete(),
      err => { this.deleteError = err; this.isDeleting = false; }
      );
  }

  deleteCryptocurrQuestion(id: number) {
    this.deleteError = null;
    this.deleteid = id;
  }

  editCryptocurr(id: number) {
    this.router.navigate(['/authenticated/cryptocurr-detail', id, 'edit']);
  }

  showCryptocurrDetail(id: number) {
    this.router.navigate(['/authenticated/cryptocurr-detail', id, 'details']);
  }

}
