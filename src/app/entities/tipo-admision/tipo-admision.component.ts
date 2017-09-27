import { Component, OnInit, Inject } from '@angular/core';

import { TipoAdmisionService } from './tipo-admision.service';
import { TipoAdmision } from './tipo-admision.model';

@Component({
  selector: 'app-tipo-admision',
  template: `
              <div class="container-fluid">
                <app-tipo-admision-list [tipoAdmisions]="tipoAdmisions"></app-tipo-admision-list>
              </div>
            `
})
export class TipoAdmisionComponent implements OnInit {

  tipoAdmisions: TipoAdmision[] = [];

  constructor(private tipoAdmisionService: TipoAdmisionService) {

  }

  ngOnInit() {
    this.tipoAdmisionService.getAll().subscribe(tipoAdmisions => this.tipoAdmisions = tipoAdmisions);
  }
}
