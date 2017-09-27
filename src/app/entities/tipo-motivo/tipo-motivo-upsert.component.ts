import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TipoMotivoService } from './tipo-motivo.service';
import { TipoMotivo } from './tipo-motivo.model';


@Component({
  selector: 'app-tipo-motivo-upsert',
  templateUrl: './tipo-motivo-upsert.component.html'
})
export class TipoMotivoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  tipoMotivo: TipoMotivo;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tipoMotivoService: TipoMotivoService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.tipoMotivoService.getById(id).subscribe(tipoMotivo => this.tipoMotivo = tipoMotivo);
      }
    });
  }

  save(formValues) {
    this.tipoMotivo = formValues;
    this.tipoMotivoService.insert(this.tipoMotivo).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipo-motivo']);
      }
    );
  }

  update() {
    this.tipoMotivoService.update(this.tipoMotivo._id, this.tipoMotivo).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipo-motivo']);
      }
    );
  }
}
