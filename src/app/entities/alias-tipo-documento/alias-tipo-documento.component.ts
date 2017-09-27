import { Component, OnInit, Inject } from '@angular/core';

import { AliasTipoDocumentoService } from './alias-tipo-documento.service';
import { AliasTipoDocumento } from './alias-tipo-documento.model';

@Component({
  selector: 'app-alias-tipo-documento',
  template: `
              <div class="container-fluid">
                <app-alias-tipo-documento-list [aliasTipoDocumentos]="aliasTipoDocumentos"></app-alias-tipo-documento-list>
              </div>
            `
})
export class AliasTipoDocumentoComponent implements OnInit {

  aliasTipoDocumentos: AliasTipoDocumento[] = [];

  constructor(private aliasTipoDocumentoService: AliasTipoDocumentoService) {

  }

  ngOnInit() {
    this.aliasTipoDocumentoService.getAll().subscribe(aliasTipoDocumentos => this.aliasTipoDocumentos = aliasTipoDocumentos);
  }
}
