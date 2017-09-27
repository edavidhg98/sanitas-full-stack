import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FotoEstadoCama } from './foto-estado-cama.model';
import { FotoEstadoCamaService } from './foto-estado-cama.service';

@Component({
  selector: 'app-foto-estado-cama-details',
  templateUrl: './foto-estado-cama-details.component.html'
})
export class FotoEstadoCamaDetailsComponent implements OnInit {

  fotoEstadoCama: FotoEstadoCama;

    constructor(
      private fotoEstadoCamaService: FotoEstadoCamaService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.fotoEstadoCamaService.getById(id).subscribe(fotoEstadoCama => this.fotoEstadoCama = fotoEstadoCama);
      });
    }
  }
