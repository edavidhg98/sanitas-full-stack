import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HomologacionServiciosAgfaService } from './homologacion-servicios-agfa.service';
import { HomologacionServiciosAgfa } from './homologacion-servicios-agfa.model';

import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';
import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';

@Component({
  selector: 'app-homologacion-servicios-agfa-upsert',
  templateUrl: './homologacion-servicios-agfa-upsert.component.html'
})
export class HomologacionServiciosAgfaUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  homologacionServiciosAgfa: HomologacionServiciosAgfa;

  /** Many-To-One Relationships */
  sucursals: Sucursal[];
  entidads: Entidad[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private homologacionServiciosAgfaService: HomologacionServiciosAgfaService,
    private sucursalService: SucursalService,
    private entidadService: EntidadService,
  ) { }

  ngOnInit() {
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.homologacionServiciosAgfaService.getById(id).subscribe(homologacionServiciosAgfa => this.homologacionServiciosAgfa = homologacionServiciosAgfa);
      }
    });
  }

  save(formValues) {
    this.homologacionServiciosAgfa = formValues;
    this.homologacionServiciosAgfaService.insert(this.homologacionServiciosAgfa).subscribe(
      (response) => {
        this.router.navigate(['/entities/homologacion-servicios-agfa']);
      }
    );
  }

  update() {
    this.homologacionServiciosAgfaService.update(this.homologacionServiciosAgfa._id, this.homologacionServiciosAgfa).subscribe(
      (response) => {
        this.router.navigate(['/entities/homologacion-servicios-agfa']);
      }
    );
  }
}
