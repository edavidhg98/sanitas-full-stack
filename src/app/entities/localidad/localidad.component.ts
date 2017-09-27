import { Component, OnInit, Inject } from '@angular/core';

import { LocalidadService } from './localidad.service';
import { Localidad } from './localidad.model';

@Component({
  selector: 'app-localidad',
  template: `
              <div class="container-fluid">
                <app-localidad-list [localidads]="localidads"></app-localidad-list>
              </div>
            `
})
export class LocalidadComponent implements OnInit {

  localidads: Localidad[] = [];

  constructor(private localidadService: LocalidadService) {

  }

  ngOnInit() {
    this.localidadService.getAll().subscribe(localidads => this.localidads = localidads);
  }
}
