import { Component, OnInit, Inject } from '@angular/core';

import { EntidadService } from './entidad.service';
import { Entidad } from './entidad.model';

@Component({
  selector: 'app-entidad',
  template: `
              <div class="container-fluid">
                <app-entidad-list [entidads]="entidads"></app-entidad-list>
              </div>
            `
})
export class EntidadComponent implements OnInit {

  entidads: Entidad[] = [];

  constructor(private entidadService: EntidadService) {

  }

  ngOnInit() {
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
  }
}
