import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SucursalEntidadService } from './sucursal-entidad.service';
import { SucursalEntidad } from './sucursal-entidad.model';

import { EncabezadoCatalogoService } from '../encabezado-catalogo/encabezado-catalogo.service';
import { EncabezadoCatalogo } from '../encabezado-catalogo/encabezado-catalogo.model';
import { MonedaService } from '../moneda/moneda.service';
import { Moneda } from '../moneda/moneda.model';
import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';
import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';

@Component({
  selector: 'app-sucursal-entidad-upsert',
  templateUrl: './sucursal-entidad-upsert.component.html'
})
export class SucursalEntidadUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  sucursalEntidad: SucursalEntidad;

  /** Many-To-One Relationships */
  encabezadoCatalogos: EncabezadoCatalogo[];
  monedas: Moneda[];
  sucursals: Sucursal[];
  entidads: Entidad[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sucursalEntidadService: SucursalEntidadService,
    private encabezadoCatalogoService: EncabezadoCatalogoService,
    private monedaService: MonedaService,
    private sucursalService: SucursalService,
    private entidadService: EntidadService,
  ) { }

  ngOnInit() {
    this.encabezadoCatalogoService.getAll().subscribe(encabezadoCatalogos => this.encabezadoCatalogos = encabezadoCatalogos);
    this.monedaService.getAll().subscribe(monedas => this.monedas = monedas);
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.sucursalEntidadService.getById(id).subscribe(sucursalEntidad => this.sucursalEntidad = sucursalEntidad);
      }
    });
  }

  save(formValues) {
    this.sucursalEntidad = formValues;
    this.sucursalEntidadService.insert(this.sucursalEntidad).subscribe(
      (response) => {
        this.router.navigate(['/entities/sucursal-entidad']);
      }
    );
  }

  update() {
    this.sucursalEntidadService.update(this.sucursalEntidad._id, this.sucursalEntidad).subscribe(
      (response) => {
        this.router.navigate(['/entities/sucursal-entidad']);
      }
    );
  }
}
