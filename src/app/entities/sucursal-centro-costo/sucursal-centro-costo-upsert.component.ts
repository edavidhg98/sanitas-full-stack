import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SucursalCentroCostoService } from './sucursal-centro-costo.service';
import { SucursalCentroCosto } from './sucursal-centro-costo.model';


@Component({
  selector: 'app-sucursal-centro-costo-upsert',
  templateUrl: './sucursal-centro-costo-upsert.component.html'
})
export class SucursalCentroCostoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  sucursalCentroCosto: SucursalCentroCosto;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sucursalCentroCostoService: SucursalCentroCostoService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.sucursalCentroCostoService.getById(id).subscribe(sucursalCentroCosto => this.sucursalCentroCosto = sucursalCentroCosto);
      }
    });
  }

  save(formValues) {
    this.sucursalCentroCosto = formValues;
    this.sucursalCentroCostoService.insert(this.sucursalCentroCosto).subscribe(
      (response) => {
        this.router.navigate(['/entities/sucursal-centro-costo']);
      }
    );
  }

  update() {
    this.sucursalCentroCostoService.update(this.sucursalCentroCosto._id, this.sucursalCentroCosto).subscribe(
      (response) => {
        this.router.navigate(['/entities/sucursal-centro-costo']);
      }
    );
  }
}
