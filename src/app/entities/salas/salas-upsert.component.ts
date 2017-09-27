import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SalasService } from './salas.service';
import { Salas } from './salas.model';

import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';

@Component({
  selector: 'app-salas-upsert',
  templateUrl: './salas-upsert.component.html'
})
export class SalasUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  salas: Salas;

  /** Many-To-One Relationships */
  sucursals: Sucursal[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private salasService: SalasService,
    private sucursalService: SucursalService,
  ) { }

  ngOnInit() {
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.salasService.getById(id).subscribe(salas => this.salas = salas);
      }
    });
  }

  save(formValues) {
    this.salas = formValues;
    this.salasService.insert(this.salas).subscribe(
      (response) => {
        this.router.navigate(['/entities/salas']);
      }
    );
  }

  update() {
    this.salasService.update(this.salas._id, this.salas).subscribe(
      (response) => {
        this.router.navigate(['/entities/salas']);
      }
    );
  }
}
