import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProcedimientosRisService } from './procedimientos-ris.service';
import { ProcedimientosRis } from './procedimientos-ris.model';

import { ProcedimientoService } from '../procedimiento/procedimiento.service';
import { Procedimiento } from '../procedimiento/procedimiento.model';

@Component({
  selector: 'app-procedimientos-ris-upsert',
  templateUrl: './procedimientos-ris-upsert.component.html'
})
export class ProcedimientosRisUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  procedimientosRis: ProcedimientosRis;

  /** Many-To-One Relationships */
  procedimientos: Procedimiento[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private procedimientosRisService: ProcedimientosRisService,
    private procedimientoService: ProcedimientoService,
  ) { }

  ngOnInit() {
    this.procedimientoService.getAll().subscribe(procedimientos => this.procedimientos = procedimientos);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.procedimientosRisService.getById(id).subscribe(procedimientosRis => this.procedimientosRis = procedimientosRis);
      }
    });
  }

  save(formValues) {
    this.procedimientosRis = formValues;
    this.procedimientosRisService.insert(this.procedimientosRis).subscribe(
      (response) => {
        this.router.navigate(['/entities/procedimientos-ris']);
      }
    );
  }

  update() {
    this.procedimientosRisService.update(this.procedimientosRis._id, this.procedimientosRis).subscribe(
      (response) => {
        this.router.navigate(['/entities/procedimientos-ris']);
      }
    );
  }
}
