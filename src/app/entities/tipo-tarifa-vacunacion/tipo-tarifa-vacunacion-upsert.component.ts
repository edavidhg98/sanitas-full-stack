import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TipoTarifaVacunacionService } from './tipo-tarifa-vacunacion.service';
import { TipoTarifaVacunacion } from './tipo-tarifa-vacunacion.model';


@Component({
  selector: 'app-tipo-tarifa-vacunacion-upsert',
  templateUrl: './tipo-tarifa-vacunacion-upsert.component.html'
})
export class TipoTarifaVacunacionUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  tipoTarifaVacunacion: TipoTarifaVacunacion;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tipoTarifaVacunacionService: TipoTarifaVacunacionService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.tipoTarifaVacunacionService.getById(id).subscribe(tipoTarifaVacunacion => this.tipoTarifaVacunacion = tipoTarifaVacunacion);
      }
    });
  }

  save(formValues) {
    this.tipoTarifaVacunacion = formValues;
    this.tipoTarifaVacunacionService.insert(this.tipoTarifaVacunacion).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipo-tarifa-vacunacion']);
      }
    );
  }

  update() {
    this.tipoTarifaVacunacionService.update(this.tipoTarifaVacunacion._id, this.tipoTarifaVacunacion).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipo-tarifa-vacunacion']);
      }
    );
  }
}
