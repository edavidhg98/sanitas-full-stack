import { Component, OnInit, Inject } from '@angular/core';

import { TrazabilidadAdmisionService } from './trazabilidad-admision.service';
import { TrazabilidadAdmision } from './trazabilidad-admision.model';

@Component({
  selector: 'app-trazabilidad-admision',
  template: `
              <div class="container-fluid">
                <app-trazabilidad-admision-list [trazabilidadAdmisions]="trazabilidadAdmisions"></app-trazabilidad-admision-list>
              </div>
            `
})
export class TrazabilidadAdmisionComponent implements OnInit {

  trazabilidadAdmisions: TrazabilidadAdmision[] = [];

  constructor(private trazabilidadAdmisionService: TrazabilidadAdmisionService) {

  }

  ngOnInit() {
    this.trazabilidadAdmisionService.getAll().subscribe(trazabilidadAdmisions => this.trazabilidadAdmisions = trazabilidadAdmisions);
  }
}
