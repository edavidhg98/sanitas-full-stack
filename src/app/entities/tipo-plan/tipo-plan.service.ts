import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { TipoPlan } from './tipo-plan.model';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TipoPlanService {

  private entityUrl = 'api/tipo-plans/';

  constructor(private http: Http) {

  }

  getAll(): Observable<TipoPlan[]> {
    return this.http.get(this.entityUrl)
      .map(this.checkStatus)
      .map(response => response.json() as TipoPlan[])
      .catch(this.handleError);
  }

  getById(id: string): Observable<TipoPlan> {
    return this.http.get(this.entityUrl + id)
      .map(this.checkStatus)
      .map(response => response.json() as TipoPlan)
      .catch(this.handleError);
  }

  insert(tipoPlan: TipoPlan): Observable<any> {
    return this.http.post(this.entityUrl, tipoPlan)
      .map(this.checkStatus)
      .catch(this.handleError);
  }

  update(id: string, tipoPlan: TipoPlan) {
    return this.http.put(this.entityUrl + id, tipoPlan)
          .map(this.checkStatus)
          .catch(this.handleError);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.entityUrl + id)
      .map(this.checkStatus)
      .catch(this.handleError);
  }

  private checkStatus(response: Response) {
    const status = response.status;
    if (status === 200 || status === 201 || status === 204) {
      return response;
    }
    throw response;
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.msg || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    console.log(error);
    return Observable.throw(errMsg);
  }
}
