import { Component, OnInit, Inject } from '@angular/core';

import { GrupoProcedimientoService } from './grupo-procedimiento.service';
import { GrupoProcedimiento } from './grupo-procedimiento.model';

@Component({
  selector: 'app-grupo-procedimiento',
  template: `
              <div class="container-fluid">
                <app-grupo-procedimiento-list [grupoProcedimientos]="grupoProcedimientos"></app-grupo-procedimiento-list>
              </div>
            `
})
export class GrupoProcedimientoComponent implements OnInit {

  grupoProcedimientos: GrupoProcedimiento[] = [];

  constructor(private grupoProcedimientoService: GrupoProcedimientoService) {

  }

  ngOnInit() {
    this.grupoProcedimientoService.getAll().subscribe(grupoProcedimientos => this.grupoProcedimientos = grupoProcedimientos);
  }
}
