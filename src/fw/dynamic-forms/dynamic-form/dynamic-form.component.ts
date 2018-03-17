import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { FieldDefinition } from '../field-definition';
import { Cryptocurr } from '../../../app/view-models/cryptocurr';
import { AppDataService } from '../../../app/services/app-data.service';

@Component({
  selector: 'fw-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnChanges, OnInit {

  @Input() vm: any;
  @Input() vmDefinition: Array<FieldDefinition>;
  @Input() operation: string;
  @Input() errorMessage: string;
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() create: EventEmitter<any> = new EventEmitter();

  // allCryptocurrs: Array<Cryptocurr>;
  // count = 0;
  cryptocurrs: Array<Cryptocurr>;



  form: FormGroup;
  status: string;
  submitted = false;
  vmCopy: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private dataService: AppDataService) { }

  clearForm() {
    let group = {};
    this.vmCopy = Object.assign({}, this.vm);
    this.vmDefinition.forEach(field => {
      group[field.key] = field.required ? new FormControl(this.vmCopy[field.key], Validators.required)
                                              : new FormControl(this.vmCopy[field.key]);
    });
    this.form = new FormGroup(group);
  }

  ngOnChanges(changes: SimpleChanges) {
     if (changes['errorMessage'].currentValue && this.status === 'waiting') {
       this.status = "";
     }
  }

  ngOnInit() {
    this.clearForm();
    this.route.params.subscribe(params => {
      this.operation = params['operation'];
      this.clearForm();
     });
  }

  onBack() {
    this.errorMessage = null;
    this.location.back();
  }

  onCancel() {
    this.onBack();
  }

  onCreate() {
    this.submitted = true;
    if (this.form.valid) {
      this.status = 'waiting';
      this.create.emit(this.form.value);
    }
  }

  onEdit() {
    this.router.navigate(['../', 'edit'], { relativeTo: this.route});
  }

  // onSave() {
  //   this.submitted = true;
  //   if (this.form.valid) {
  //     this.status = 'waiting';
  //     this.update.emit(this.form.value);
  //   }
  // }

  onSave(cryptocurr: any) {
    this.dataService.updateCryptocurr(cryptocurr)
      .subscribe(resUpdatedCryptocurr =>
        cryptocurr = resUpdatedCryptocurr);
        // this.selectedVideo = null;
  }

  onSubmitCryptocurr(cryptoccur: Cryptocurr) {
    this.dataService.createCryptocurr(cryptoccur)
      .subscribe(resNewCryptoccur => {
        this.cryptocurrs.push(resNewCryptoccur);
        // this.hidenewVideo = true;
        // this.selectedVideo = resNewVideo;
      });
  }
}
