import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EncabezadoCatalogoService } from './encabezado-catalogo.service';
import { EncabezadoCatalogo } from './encabezado-catalogo.model';


@Component({
  selector: 'app-encabezado-catalogo-upsert',
  templateUrl: './encabezado-catalogo-upsert.component.html'
})
export class EncabezadoCatalogoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  encabezadoCatalogo: EncabezadoCatalogo;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private encabezadoCatalogoService: EncabezadoCatalogoService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.encabezadoCatalogoService.getById(id).subscribe(encabezadoCatalogo => this.encabezadoCatalogo = encabezadoCatalogo);
      }
    });
  }

  save(formValues) {
    this.encabezadoCatalogo = formValues;
    this.encabezadoCatalogoService.insert(this.encabezadoCatalogo).subscribe(
      (response) => {
        this.router.navigate(['/entities/encabezado-catalogo']);
      }
    );
  }

  update() {
    this.encabezadoCatalogoService.update(this.encabezadoCatalogo._id, this.encabezadoCatalogo).subscribe(
      (response) => {
        this.router.navigate(['/entities/encabezado-catalogo']);
      }
    );
  }
}
