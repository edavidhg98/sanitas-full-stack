import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ParFormulario } from './par-formulario.model';
import { ParFormularioService } from './par-formulario.service';

@Component({
  selector: 'app-par-formulario-details',
  templateUrl: './par-formulario-details.component.html'
})
export class ParFormularioDetailsComponent implements OnInit {

  parFormulario: ParFormulario;

    constructor(
      private parFormularioService: ParFormularioService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.parFormularioService.getById(id).subscribe(parFormulario => this.parFormulario = parFormulario);
      });
    }
  }
