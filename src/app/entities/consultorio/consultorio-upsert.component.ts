import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConsultorioService } from './consultorio.service';
import { Consultorio } from './consultorio.model';

import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';

@Component({
  selector: 'app-consultorio-upsert',
  templateUrl: './consultorio-upsert.component.html'
})
export class ConsultorioUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  consultorio: Consultorio;

  /** Many-To-One Relationships */
  sucursals: Sucursal[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private consultorioService: ConsultorioService,
    private sucursalService: SucursalService,
  ) { }

  ngOnInit() {
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.consultorioService.getById(id).subscribe(consultorio => this.consultorio = consultorio);
      }
    });
  }

  save(formValues) {
    this.consultorio = formValues;
    this.consultorioService.insert(this.consultorio).subscribe(
      (response) => {
        this.router.navigate(['/entities/consultorio']);
      }
    );
  }

  update() {
    this.consultorioService.update(this.consultorio._id, this.consultorio).subscribe(
      (response) => {
        this.router.navigate(['/entities/consultorio']);
      }
    );
  }
}
