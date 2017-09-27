import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ZonaHorariaService } from './zona-horaria.service';
import { ZonaHoraria } from './zona-horaria.model';

import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';

@Component({
  selector: 'app-zona-horaria-upsert',
  templateUrl: './zona-horaria-upsert.component.html'
})
export class ZonaHorariaUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  zonaHoraria: ZonaHoraria;

  /** Many-To-One Relationships */
  sucursals: Sucursal[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private zonaHorariaService: ZonaHorariaService,
    private sucursalService: SucursalService,
  ) { }

  ngOnInit() {
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.zonaHorariaService.getById(id).subscribe(zonaHoraria => this.zonaHoraria = zonaHoraria);
      }
    });
  }

  save(formValues) {
    this.zonaHoraria = formValues;
    this.zonaHorariaService.insert(this.zonaHoraria).subscribe(
      (response) => {
        this.router.navigate(['/entities/zona-horaria']);
      }
    );
  }

  update() {
    this.zonaHorariaService.update(this.zonaHoraria._id, this.zonaHoraria).subscribe(
      (response) => {
        this.router.navigate(['/entities/zona-horaria']);
      }
    );
  }
}
