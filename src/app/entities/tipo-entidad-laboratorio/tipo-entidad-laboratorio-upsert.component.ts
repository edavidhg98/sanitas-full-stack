import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TipoEntidadLaboratorioService } from './tipo-entidad-laboratorio.service';
import { TipoEntidadLaboratorio } from './tipo-entidad-laboratorio.model';


@Component({
  selector: 'app-tipo-entidad-laboratorio-upsert',
  templateUrl: './tipo-entidad-laboratorio-upsert.component.html'
})
export class TipoEntidadLaboratorioUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  tipoEntidadLaboratorio: TipoEntidadLaboratorio;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tipoEntidadLaboratorioService: TipoEntidadLaboratorioService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.tipoEntidadLaboratorioService.getById(id).subscribe(tipoEntidadLaboratorio => this.tipoEntidadLaboratorio = tipoEntidadLaboratorio);
      }
    });
  }

  save(formValues) {
    this.tipoEntidadLaboratorio = formValues;
    this.tipoEntidadLaboratorioService.insert(this.tipoEntidadLaboratorio).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipo-entidad-laboratorio']);
      }
    );
  }

  update() {
    this.tipoEntidadLaboratorioService.update(this.tipoEntidadLaboratorio._id, this.tipoEntidadLaboratorio).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipo-entidad-laboratorio']);
      }
    );
  }
}
