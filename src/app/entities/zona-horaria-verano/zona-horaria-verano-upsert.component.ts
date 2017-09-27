import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ZonaHorariaVeranoService } from './zona-horaria-verano.service';
import { ZonaHorariaVerano } from './zona-horaria-verano.model';

import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';

@Component({
  selector: 'app-zona-horaria-verano-upsert',
  templateUrl: './zona-horaria-verano-upsert.component.html'
})
export class ZonaHorariaVeranoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  zonaHorariaVerano: ZonaHorariaVerano;

  /** Many-To-One Relationships */
  sucursals: Sucursal[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private zonaHorariaVeranoService: ZonaHorariaVeranoService,
    private sucursalService: SucursalService,
  ) { }

  ngOnInit() {
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.zonaHorariaVeranoService.getById(id).subscribe(zonaHorariaVerano => this.zonaHorariaVerano = zonaHorariaVerano);
      }
    });
  }

  save(formValues) {
    this.zonaHorariaVerano = formValues;
    this.zonaHorariaVeranoService.insert(this.zonaHorariaVerano).subscribe(
      (response) => {
        this.router.navigate(['/entities/zona-horaria-verano']);
      }
    );
  }

  update() {
    this.zonaHorariaVeranoService.update(this.zonaHorariaVerano._id, this.zonaHorariaVerano).subscribe(
      (response) => {
        this.router.navigate(['/entities/zona-horaria-verano']);
      }
    );
  }
}
