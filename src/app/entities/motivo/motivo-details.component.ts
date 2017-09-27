import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Motivo } from './motivo.model';
import { MotivoService } from './motivo.service';

@Component({
  selector: 'app-motivo-details',
  templateUrl: './motivo-details.component.html'
})
export class MotivoDetailsComponent implements OnInit {

  motivo: Motivo;

    constructor(
      private motivoService: MotivoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.motivoService.getById(id).subscribe(motivo => this.motivo = motivo);
      });
    }
  }
