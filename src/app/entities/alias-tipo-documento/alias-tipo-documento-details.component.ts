import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AliasTipoDocumento } from './alias-tipo-documento.model';
import { AliasTipoDocumentoService } from './alias-tipo-documento.service';

@Component({
  selector: 'app-alias-tipo-documento-details',
  templateUrl: './alias-tipo-documento-details.component.html'
})
export class AliasTipoDocumentoDetailsComponent implements OnInit {

  aliasTipoDocumento: AliasTipoDocumento;

    constructor(
      private aliasTipoDocumentoService: AliasTipoDocumentoService,
      private route: ActivatedRoute
    ) {

    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.aliasTipoDocumentoService.getById(id).subscribe(aliasTipoDocumento => this.aliasTipoDocumento = aliasTipoDocumento);
      });
    }
  }
