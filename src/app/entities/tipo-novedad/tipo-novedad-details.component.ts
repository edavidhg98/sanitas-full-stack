import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TipoNovedad } from './tipo-novedad.model';
import { TipoNovedadService } from './tipo-novedad.service';

@Component({
  selector: 'app-tipo-novedad-details',
  templateUrl: './tipo-novedad-details.component.html'
})
export class TipoNovedadDetailsComponent implements OnInit {

  tipoNovedad: TipoNovedad;

    constructor(
      private tipoNovedadService: TipoNovedadService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.tipoNovedadService.getById(id).subscribe(tipoNovedad => this.tipoNovedad = tipoNovedad);
      });
    }
  }
