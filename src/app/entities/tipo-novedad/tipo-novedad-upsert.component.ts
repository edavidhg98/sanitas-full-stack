import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TipoNovedadService } from './tipo-novedad.service';
import { TipoNovedad } from './tipo-novedad.model';


@Component({
  selector: 'app-tipo-novedad-upsert',
  templateUrl: './tipo-novedad-upsert.component.html'
})
export class TipoNovedadUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  tipoNovedad: TipoNovedad;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tipoNovedadService: TipoNovedadService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.tipoNovedadService.getById(id).subscribe(tipoNovedad => this.tipoNovedad = tipoNovedad);
      }
    });
  }

  save(formValues) {
    this.tipoNovedad = formValues;
    this.tipoNovedadService.insert(this.tipoNovedad).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipo-novedad']);
      }
    );
  }

  update() {
    this.tipoNovedadService.update(this.tipoNovedad._id, this.tipoNovedad).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipo-novedad']);
      }
    );
  }
}
