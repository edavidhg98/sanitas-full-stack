import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { CodigoDia } from './codigo-dia.model';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CodigoDiaService {

  private entityUrl = 'api/codigo-dias/';

  constructor(private http: Http) {

  }

  getAll(): Observable<CodigoDia[]> {
    return this.http.get(this.entityUrl)
      .map(this.checkStatus)
      .map(response => response.json() as CodigoDia[])
      .catch(this.handleError);
  }

  getById(id: string): Observable<CodigoDia> {
    return this.http.get(this.entityUrl + id)
      .map(this.checkStatus)
      .map(response => response.json() as CodigoDia)
      .catch(this.handleError);
  }

  insert(codigoDia: CodigoDia): Observable<any> {
    return this.http.post(this.entityUrl, codigoDia)
      .map(this.checkStatus)
      .catch(this.handleError);
  }

  update(id: string, codigoDia: CodigoDia) {
    return this.http.put(this.entityUrl + id, codigoDia)
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
