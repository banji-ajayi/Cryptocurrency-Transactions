import { Injectable } from '@angular/core';

import { UserService } from './user.service';
import { Cryptocurr } from '../view-models/cryptocurr';
import { Observable } from 'rxjs/Observable';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppDataService {

     private cryptocurrs: Array<Cryptocurr> = [];
  // private cryptocurrs : Array<Cryptocurr> = [
  //   { id: 1, name:"bitcoin",  epiIndex: 87.67},
  //   { id: 2, name:"entro-money",   epiIndex: 83.29 },
  //   { id: 3, name:"ethereum", epiIndex: 82.48 },
  //   { id: 4, name:"payeer", epiIndex: 81.78 },
  //   { id: 5, name:"payza", epiIndex: 81.47 },
  //   { id: 6, name:"perfect-money", epiIndex: 80.47 },
  //   { id: 7, name:"webmoney", epiIndex: 79.09 }

  // ];

  private _getUrl = '/api/cryptocurrs';
  // private _getOneUrl = '/api/cryptocurrs/';
  private _postUrl = '/api/cryptocurr';
  private _putUrl = '/api/cryptocurr/';

  constructor(private userService: UserService, private _http: Http) {
  }

  getCryptocurrs() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

  // getCryptocurr(cryptocurr: Cryptocurr) {
  //   return this._http.get(this._getOneUrl + cryptocurr.id)
  //     .map((response: Response) => response.json());
  // }

  createCryptocurr(cryptocurr: Cryptocurr) {
    // tslint:disable-next-line:prefer-const
    let headers = new Headers({'Content-Type': 'application/json'});
    // tslint:disable-next-line:prefer-const
    let options = new RequestOptions({headers: headers});
    // let id = 0;
    // this.cryptocurrs.forEach(c => { if (c.id >= id) id = c.id+1 });
    // cryptocurr.id = id;
    return this._http.post(this._postUrl, JSON.stringify(cryptocurr), options)
      .map((response: Response) => response.json());
  }

  updateCryptocurr(cryptocurr: Cryptocurr) {
    // tslint:disable-next-line:prefer-const
    let headers = new Headers({'Content-Type': 'application/json'});
    // tslint:disable-next-line:prefer-const
    let options = new RequestOptions({headers: headers});
    return this._http.put(this._putUrl + cryptocurr.id, JSON.stringify(cryptocurr), options)
      .map((response: Response) => response.json());
  }


  // createCryptocurr(vm: Cryptocurr) : Observable<any> {
  //   //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Unable to create cryptocurr'));
  //   let id = 0;
  //   this.cryptocurrs.forEach(c => { if (c.id >= id) id = c.id+1 });
  //   vm.id = id;
  //   this.cryptocurrs.push(vm);
  //   return Observable.of(vm);
  // }

  deleteCryptocurr(id: number): Observable<any> {
    //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Delete error.'));
    return Observable.of({}).delay(2000)
     .do(e => this.cryptocurrs.splice(this.cryptocurrs.findIndex(c => c.id == id), 1));
  }

  // getCryptocurrs() : Observable<any> {
  //   return Observable.of(this.cryptocurrs);
  // }

  // getCryptocurr(id: string) : Observable<any> {
  //   if (id === '') {
  //     return Observable.create((observer: any) => {
  //       observer.next(this.initializeCryptoccur());
  //       observer.complete();
  //     });
  //   }
  //     const url = `${this._getUrl}/${id}`;
  //     return this._http.get(url)
  //     .map(this.extractData)

    // var cryptocurr = this.cryptocurrs.find(c => c.id == id);
    // return Observable.of(cryptocurr);
  // }

  // private extractData(response: Response) {
  //   let body = response.json();
  //   return body.data || {};
  // }

 getCryptocurr(id: number) : Observable<Cryptocurr> {
    const url = `${this._getUrl}/${id}`;
    return this._http.get(url)
    .map((response: Response) => response.json());
  }

  // initializeCryptoccur(): Cryptocurr{
  //   // Return an initialized object
  //    return{
  //      id: '',
  //      name: null,
  //      epiIndex: null

  //    };
 // }

  // updateCryptocurr(updatedCryptocurr: Cryptocurr) : Observable<any> {
  //   var cryptocurr = this.cryptocurrs.find(c => c.id == updatedCryptocurr.id);
  //   Object.assign(cryptocurr, updatedCryptocurr);
  //   return Observable.of(cryptocurr).delay(2000);
  //   //return Observable.of({}).delay(2000).flatMap(x=>Observable.throw(''));
  // }



}
