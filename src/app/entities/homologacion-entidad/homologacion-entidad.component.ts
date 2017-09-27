import { Component, OnInit, Inject } from '@angular/core';

import { HomologacionEntidadService } from './homologacion-entidad.service';
import { HomologacionEntidad } from './homologacion-entidad.model';

@Component({
  selector: 'app-homologacion-entidad',
  template: `
              <div class="container-fluid">
                <app-homologacion-entidad-list [homologacionEntidads]="homologacionEntidads"></app-homologacion-entidad-list>
              </div>
            `
})
export class HomologacionEntidadComponent implements OnInit {

  homologacionEntidads: HomologacionEntidad[] = [];

  constructor(private homologacionEntidadService: HomologacionEntidadService) {

  }

  ngOnInit() {
    this.homologacionEntidadService.getAll().subscribe(homologacionEntidads => this.homologacionEntidads = homologacionEntidads);
  }
}
