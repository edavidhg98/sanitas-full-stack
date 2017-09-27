import { Component, OnInit, Inject } from '@angular/core';

import { AdmisionObservacionesService } from './admision-observaciones.service';
import { AdmisionObservaciones } from './admision-observaciones.model';

@Component({
  selector: 'app-admision-observaciones',
  template: `
              <div class="container-fluid">
                <app-admision-observaciones-list [admisionObservacioness]="admisionObservacioness"></app-admision-observaciones-list>
              </div>
            `
})
export class AdmisionObservacionesComponent implements OnInit {

  admisionObservacioness: AdmisionObservaciones[] = [];

  constructor(private admisionObservacionesService: AdmisionObservacionesService) {

  }

  ngOnInit() {
    this.admisionObservacionesService.getAll().subscribe(admisionObservacioness => this.admisionObservacioness = admisionObservacioness);
  }
}
