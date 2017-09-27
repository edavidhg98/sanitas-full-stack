import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CensoServicio } from './censo-servicio.model';
import { CensoServicioService } from './censo-servicio.service';

@Component({
  selector: 'app-censo-servicio-details',
  templateUrl: './censo-servicio-details.component.html'
})
export class CensoServicioDetailsComponent implements OnInit {

  censoServicio: CensoServicio;

    constructor(
      private censoServicioService: CensoServicioService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.censoServicioService.getById(id).subscribe(censoServicio => this.censoServicio = censoServicio);
      });
    }
  }
