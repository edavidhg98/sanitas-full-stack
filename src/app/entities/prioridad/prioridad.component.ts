import { Component, OnInit, Inject } from '@angular/core';

import { PrioridadService } from './prioridad.service';
import { Prioridad } from './prioridad.model';

@Component({
  selector: 'app-prioridad',
  template: `
              <div class="container-fluid">
                <app-prioridad-list [prioridads]="prioridads"></app-prioridad-list>
              </div>
            `
})
export class PrioridadComponent implements OnInit {

  prioridads: Prioridad[] = [];

  constructor(private prioridadService: PrioridadService) {

  }

  ngOnInit() {
    this.prioridadService.getAll().subscribe(prioridads => this.prioridads = prioridads);
  }
}
