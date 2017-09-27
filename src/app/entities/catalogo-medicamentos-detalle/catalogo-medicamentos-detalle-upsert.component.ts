import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CatalogoMedicamentosDetalleService } from './catalogo-medicamentos-detalle.service';
import { CatalogoMedicamentosDetalle } from './catalogo-medicamentos-detalle.model';


@Component({
  selector: 'app-catalogo-medicamentos-detalle-upsert',
  templateUrl: './catalogo-medicamentos-detalle-upsert.component.html'
})
export class CatalogoMedicamentosDetalleUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  catalogoMedicamentosDetalle: CatalogoMedicamentosDetalle;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private catalogoMedicamentosDetalleService: CatalogoMedicamentosDetalleService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.catalogoMedicamentosDetalleService.getById(id).subscribe(catalogoMedicamentosDetalle => this.catalogoMedicamentosDetalle = catalogoMedicamentosDetalle);
      }
    });
  }

  save(formValues) {
    this.catalogoMedicamentosDetalle = formValues;
    this.catalogoMedicamentosDetalleService.insert(this.catalogoMedicamentosDetalle).subscribe(
      (response) => {
        this.router.navigate(['/entities/catalogo-medicamentos-detalle']);
      }
    );
  }

  update() {
    this.catalogoMedicamentosDetalleService.update(this.catalogoMedicamentosDetalle._id, this.catalogoMedicamentosDetalle).subscribe(
      (response) => {
        this.router.navigate(['/entities/catalogo-medicamentos-detalle']);
      }
    );
  }
}
