import { Component, OnInit, Inject } from '@angular/core';

import { ProcedimientoNivelService } from './procedimiento-nivel.service';
import { ProcedimientoNivel } from './procedimiento-nivel.model';

@Component({
  selector: 'app-procedimiento-nivel',
  template: `
              <div class="container-fluid">
                <app-procedimiento-nivel-list [procedimientoNivels]="procedimientoNivels"></app-procedimiento-nivel-list>
              </div>
            `
})
export class ProcedimientoNivelComponent implements OnInit {

  procedimientoNivels: ProcedimientoNivel[] = [];

  constructor(private procedimientoNivelService: ProcedimientoNivelService) {

  }

  ngOnInit() {
    this.procedimientoNivelService.getAll().subscribe(procedimientoNivels => this.procedimientoNivels = procedimientoNivels);
  }
}
