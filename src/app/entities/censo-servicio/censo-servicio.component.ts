import { Component, OnInit, Inject } from '@angular/core';

import { CensoServicioService } from './censo-servicio.service';
import { CensoServicio } from './censo-servicio.model';

@Component({
  selector: 'app-censo-servicio',
  template: `
              <div class="container-fluid">
                <app-censo-servicio-list [censoServicios]="censoServicios"></app-censo-servicio-list>
              </div>
            `
})
export class CensoServicioComponent implements OnInit {

  censoServicios: CensoServicio[] = [];

  constructor(private censoServicioService: CensoServicioService) {

  }

  ngOnInit() {
    this.censoServicioService.getAll().subscribe(censoServicios => this.censoServicios = censoServicios);
  }
}
