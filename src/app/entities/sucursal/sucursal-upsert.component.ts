import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SucursalService } from './sucursal.service';
import { Sucursal } from './sucursal.model';

import { CiudadService } from '../ciudad/ciudad.service';
import { Ciudad } from '../ciudad/ciudad.model';
import { PrestadorService } from '../prestador/prestador.service';
import { Prestador } from '../prestador/prestador.model';
import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';

@Component({
  selector: 'app-sucursal-upsert',
  templateUrl: './sucursal-upsert.component.html'
})
export class SucursalUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  sucursal: Sucursal;

  /** Many-To-One Relationships */
  ciudads: Ciudad[];
  prestadors: Prestador[];
  entidads: Entidad[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sucursalService: SucursalService,
    private ciudadService: CiudadService,
    private prestadorService: PrestadorService,
    private entidadService: EntidadService,
  ) { }

  ngOnInit() {
    this.ciudadService.getAll().subscribe(ciudads => this.ciudads = ciudads);
    this.prestadorService.getAll().subscribe(prestadors => this.prestadors = prestadors);
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.sucursalService.getById(id).subscribe(sucursal => this.sucursal = sucursal);
      }
    });
  }

  save(formValues) {
    this.sucursal = formValues;
    this.sucursalService.insert(this.sucursal).subscribe(
      (response) => {
        this.router.navigate(['/entities/sucursal']);
      }
    );
  }

  update() {
    this.sucursalService.update(this.sucursal._id, this.sucursal).subscribe(
      (response) => {
        this.router.navigate(['/entities/sucursal']);
      }
    );
  }
}
