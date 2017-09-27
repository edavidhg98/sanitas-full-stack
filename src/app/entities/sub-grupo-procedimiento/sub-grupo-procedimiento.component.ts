import { Component, OnInit, Inject } from '@angular/core';

import { SubGrupoProcedimientoService } from './sub-grupo-procedimiento.service';
import { SubGrupoProcedimiento } from './sub-grupo-procedimiento.model';

@Component({
  selector: 'app-sub-grupo-procedimiento',
  template: `
              <div class="container-fluid">
                <app-sub-grupo-procedimiento-list [subGrupoProcedimientos]="subGrupoProcedimientos"></app-sub-grupo-procedimiento-list>
              </div>
            `
})
export class SubGrupoProcedimientoComponent implements OnInit {

  subGrupoProcedimientos: SubGrupoProcedimiento[] = [];

  constructor(private subGrupoProcedimientoService: SubGrupoProcedimientoService) {

  }

  ngOnInit() {
    this.subGrupoProcedimientoService.getAll().subscribe(subGrupoProcedimientos => this.subGrupoProcedimientos = subGrupoProcedimientos);
  }
}
