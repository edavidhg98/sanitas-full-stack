import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Salario } from './salario.model';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SalarioService {

  private entityUrl = 'api/salarios/';

  constructor(private http: Http) {

  }

  getAll(): Observable<Salario[]> {
    return this.http.get(this.entityUrl)
      .map(this.checkStatus)
      .map(response => response.json() as Salario[])
      .catch(this.handleError);
  }

  getById(id: string): Observable<Salario> {
    return this.http.get(this.entityUrl + id)
      .map(this.checkStatus)
      .map(response => response.json() as Salario)
      .catch(this.handleError);
  }

  insert(salario: Salario): Observable<any> {
    return this.http.post(this.entityUrl, salario)
      .map(this.checkStatus)
      .catch(this.handleError);
  }

  update(id: string, salario: Salario) {
    return this.http.put(this.entityUrl + id, salario)
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
