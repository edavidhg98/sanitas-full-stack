import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProcedimientoService } from './procedimiento.service';
import { Procedimiento } from './procedimiento.model';

import { SubGrupoProcedimientoService } from '../sub-grupo-procedimiento/sub-grupo-procedimiento.service';
import { SubGrupoProcedimiento } from '../sub-grupo-procedimiento/sub-grupo-procedimiento.model';

@Component({
  selector: 'app-procedimiento-upsert',
  templateUrl: './procedimiento-upsert.component.html'
})
export class ProcedimientoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  procedimiento: Procedimiento;

  /** Many-To-One Relationships */
  subGrupoProcedimientos: SubGrupoProcedimiento[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private procedimientoService: ProcedimientoService,
    private subGrupoProcedimientoService: SubGrupoProcedimientoService,
  ) { }

  ngOnInit() {
    this.subGrupoProcedimientoService.getAll().subscribe(subGrupoProcedimientos => this.subGrupoProcedimientos = subGrupoProcedimientos);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.procedimientoService.getById(id).subscribe(procedimiento => this.procedimiento = procedimiento);
      }
    });
  }

  save(formValues) {
    this.procedimiento = formValues;
    this.procedimientoService.insert(this.procedimiento).subscribe(
      (response) => {
        this.router.navigate(['/entities/procedimiento']);
      }
    );
  }

  update() {
    this.procedimientoService.update(this.procedimiento._id, this.procedimiento).subscribe(
      (response) => {
        this.router.navigate(['/entities/procedimiento']);
      }
    );
  }
}
