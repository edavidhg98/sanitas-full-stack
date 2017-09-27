import { Component, OnInit, Inject } from '@angular/core';

import { CitaRetrasoService } from './cita-retraso.service';
import { CitaRetraso } from './cita-retraso.model';

@Component({
  selector: 'app-cita-retraso',
  template: `
              <div class="container-fluid">
                <app-cita-retraso-list [citaRetrasos]="citaRetrasos"></app-cita-retraso-list>
              </div>
            `
})
export class CitaRetrasoComponent implements OnInit {

  citaRetrasos: CitaRetraso[] = [];

  constructor(private citaRetrasoService: CitaRetrasoService) {

  }

  ngOnInit() {
    this.citaRetrasoService.getAll().subscribe(citaRetrasos => this.citaRetrasos = citaRetrasos);
  }
}
