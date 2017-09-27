import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SubGrupoProcedimientoService } from './sub-grupo-procedimiento.service';
import { SubGrupoProcedimiento } from './sub-grupo-procedimiento.model';

import { GrupoProcedimientoService } from '../grupo-procedimiento/grupo-procedimiento.service';
import { GrupoProcedimiento } from '../grupo-procedimiento/grupo-procedimiento.model';

@Component({
  selector: 'app-sub-grupo-procedimiento-upsert',
  templateUrl: './sub-grupo-procedimiento-upsert.component.html'
})
export class SubGrupoProcedimientoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  subGrupoProcedimiento: SubGrupoProcedimiento;

  /** Many-To-One Relationships */
  grupoProcedimientos: GrupoProcedimiento[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private subGrupoProcedimientoService: SubGrupoProcedimientoService,
    private grupoProcedimientoService: GrupoProcedimientoService,
  ) { }

  ngOnInit() {
    this.grupoProcedimientoService.getAll().subscribe(grupoProcedimientos => this.grupoProcedimientos = grupoProcedimientos);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.subGrupoProcedimientoService.getById(id).subscribe(subGrupoProcedimiento => this.subGrupoProcedimiento = subGrupoProcedimiento);
      }
    });
  }

  save(formValues) {
    this.subGrupoProcedimiento = formValues;
    this.subGrupoProcedimientoService.insert(this.subGrupoProcedimiento).subscribe(
      (response) => {
        this.router.navigate(['/entities/sub-grupo-procedimiento']);
      }
    );
  }

  update() {
    this.subGrupoProcedimientoService.update(this.subGrupoProcedimiento._id, this.subGrupoProcedimiento).subscribe(
      (response) => {
        this.router.navigate(['/entities/sub-grupo-procedimiento']);
      }
    );
  }
}
