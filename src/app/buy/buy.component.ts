import { Component, OnInit } from '@angular/core';
import { BuyCurrency } from '../view-models/buy.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent  {
  currency = ['payza', 'bitcoin', 'webmoney', 'switz', 'payeer'];
  modes = ['standard bank', 'Guaranty trust Bank' ];
  // model = new BuyCurrency('Olufemi', 'Banji-Ajayi', true, 'flywire', 'Select E-currency');

  model = new BuyCurrency('default', '', 'defaultPay', '', '', '', '');
  hasMyEcurrencyError = false;
  hasPaymentModeError = false;

  constructor() {}

  // constructor(private formPoster: FormPoster){
  //   this.formPoster.getCurrencies()
  //   .subscribe(
  //     data => this.currency = data.currency,
  //     err => console.log('get error: ', err)
  //   );

  //   this.formPoster.getBuyPayToMode()
  //   .subscribe(
  //     data => this.currency = data.currency,
  //     err => console.log('get error: ', err)
  //   );
  // }

  submitForm(form: NgForm) {
    this.validateMyECurrency(this.model.myECurrency);
    if(this.hasMyEcurrencyError)
      return;

      this.validatePaymentMode(this.model.myECurrency);
      if(this.hasPaymentModeError)
        return;


    // this.formPoster.postBuyCurrencyForm(this.model)
    //     .subscribe(
    //       data => console.log('success: ', data),
    //       err => console.log('error: ', err)
    //     );
  }

  validateMyECurrency(value){
    // console.log('curr: ' + this.model.myECurrency);
    if(value ==='default')
      this.hasMyEcurrencyError = true;
    else
      this.hasMyEcurrencyError = false;
  }

  validatePaymentMode(value){
    // console.log('curr: ' + this.model.myECurrency);
    if(value ==='defaultPay')
      this.hasPaymentModeError = true;
    else
      this.hasPaymentModeError = false;
  }

//   firstNameToUpperCase(value: string) {
//     if (value.length > 0)
//       this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
//     else
//       this.model.firstName = value;


// }
}
