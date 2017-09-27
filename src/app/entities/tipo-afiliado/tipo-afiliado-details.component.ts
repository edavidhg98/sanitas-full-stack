import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TipoAfiliado } from './tipo-afiliado.model';
import { TipoAfiliadoService } from './tipo-afiliado.service';

@Component({
  selector: 'app-tipo-afiliado-details',
  templateUrl: './tipo-afiliado-details.component.html'
})
export class TipoAfiliadoDetailsComponent implements OnInit {

  tipoAfiliado: TipoAfiliado;

    constructor(
      private tipoAfiliadoService: TipoAfiliadoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.tipoAfiliadoService.getById(id).subscribe(tipoAfiliado => this.tipoAfiliado = tipoAfiliado);
      });
    }
  }
