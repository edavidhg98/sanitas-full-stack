import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MedicoGrupoProcedimientoService } from './medico-grupo-procedimiento.service';
import { MedicoGrupoProcedimiento } from './medico-grupo-procedimiento.model';

import { SubGrupoProcedimientoService } from '../sub-grupo-procedimiento/sub-grupo-procedimiento.service';
import { SubGrupoProcedimiento } from '../sub-grupo-procedimiento/sub-grupo-procedimiento.model';
import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';

@Component({
  selector: 'app-medico-grupo-procedimiento-upsert',
  templateUrl: './medico-grupo-procedimiento-upsert.component.html'
})
export class MedicoGrupoProcedimientoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  medicoGrupoProcedimiento: MedicoGrupoProcedimiento;

  /** Many-To-One Relationships */
  subGrupoProcedimientos: SubGrupoProcedimiento[];
  sucursals: Sucursal[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private medicoGrupoProcedimientoService: MedicoGrupoProcedimientoService,
    private subGrupoProcedimientoService: SubGrupoProcedimientoService,
    private sucursalService: SucursalService,
  ) { }

  ngOnInit() {
    this.subGrupoProcedimientoService.getAll().subscribe(subGrupoProcedimientos => this.subGrupoProcedimientos = subGrupoProcedimientos);
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.medicoGrupoProcedimientoService.getById(id).subscribe(medicoGrupoProcedimiento => this.medicoGrupoProcedimiento = medicoGrupoProcedimiento);
      }
    });
  }

  save(formValues) {
    this.medicoGrupoProcedimiento = formValues;
    this.medicoGrupoProcedimientoService.insert(this.medicoGrupoProcedimiento).subscribe(
      (response) => {
        this.router.navigate(['/entities/medico-grupo-procedimiento']);
      }
    );
  }

  update() {
    this.medicoGrupoProcedimientoService.update(this.medicoGrupoProcedimiento._id, this.medicoGrupoProcedimiento).subscribe(
      (response) => {
        this.router.navigate(['/entities/medico-grupo-procedimiento']);
      }
    );
  }
}
