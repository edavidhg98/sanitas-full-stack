import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AliasTipoDocumentoService } from './alias-tipo-documento.service';
import { AliasTipoDocumento } from './alias-tipo-documento.model';


@Component({
  selector: 'app-alias-tipo-documento-upsert',
  templateUrl: './alias-tipo-documento-upsert.component.html'
})
export class AliasTipoDocumentoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  aliasTipoDocumento: AliasTipoDocumento;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private aliasTipoDocumentoService: AliasTipoDocumentoService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.aliasTipoDocumentoService.getById(id).subscribe(aliasTipoDocumento => this.aliasTipoDocumento = aliasTipoDocumento);
      }
    });
  }

  save(formValues) {
    this.aliasTipoDocumento = formValues;
    this.aliasTipoDocumentoService.insert(this.aliasTipoDocumento).subscribe(
      (response) => {
        this.router.navigate(['/entities/alias-tipo-documento']);
      }
    );
  }

  update() {
    this.aliasTipoDocumentoService.update(this.aliasTipoDocumento._id, this.aliasTipoDocumento).subscribe(
      (response) => {
        this.router.navigate(['/entities/alias-tipo-documento']);
      }
    );
  }
}
