import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GrupoEtareoService } from './grupo-etareo.service';
import { GrupoEtareo } from './grupo-etareo.model';

import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';
import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';

@Component({
  selector: 'app-grupo-etareo-upsert',
  templateUrl: './grupo-etareo-upsert.component.html'
})
export class GrupoEtareoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  grupoEtareo: GrupoEtareo;

  /** Many-To-One Relationships */
  entidads: Entidad[];
  sucursals: Sucursal[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private grupoEtareoService: GrupoEtareoService,
    private entidadService: EntidadService,
    private sucursalService: SucursalService,
  ) { }

  ngOnInit() {
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.grupoEtareoService.getById(id).subscribe(grupoEtareo => this.grupoEtareo = grupoEtareo);
      }
    });
  }

  save(formValues) {
    this.grupoEtareo = formValues;
    this.grupoEtareoService.insert(this.grupoEtareo).subscribe(
      (response) => {
        this.router.navigate(['/entities/grupo-etareo']);
      }
    );
  }

  update() {
    this.grupoEtareoService.update(this.grupoEtareo._id, this.grupoEtareo).subscribe(
      (response) => {
        this.router.navigate(['/entities/grupo-etareo']);
      }
    );
  }
}
