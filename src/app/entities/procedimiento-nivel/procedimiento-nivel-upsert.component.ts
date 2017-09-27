import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProcedimientoNivelService } from './procedimiento-nivel.service';
import { ProcedimientoNivel } from './procedimiento-nivel.model';

import { ProcedimientoService } from '../procedimiento/procedimiento.service';
import { Procedimiento } from '../procedimiento/procedimiento.model';
import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';

@Component({
  selector: 'app-procedimiento-nivel-upsert',
  templateUrl: './procedimiento-nivel-upsert.component.html'
})
export class ProcedimientoNivelUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  procedimientoNivel: ProcedimientoNivel;

  /** Many-To-One Relationships */
  procedimientos: Procedimiento[];
  procedimiento1s: Procedimiento[];
  sucursals: Sucursal[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private procedimientoNivelService: ProcedimientoNivelService,
    private procedimientoService: ProcedimientoService,
    private sucursalService: SucursalService,
  ) { }

  ngOnInit() {
    this.procedimientoService.getAll().subscribe(procedimientos => this.procedimientos = procedimientos);
    this.procedimientoService.getAll().subscribe(procedimiento1s => this.procedimiento1s = procedimiento1s);
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.procedimientoNivelService.getById(id).subscribe(procedimientoNivel => this.procedimientoNivel = procedimientoNivel);
      }
    });
  }

  save(formValues) {
    this.procedimientoNivel = formValues;
    this.procedimientoNivelService.insert(this.procedimientoNivel).subscribe(
      (response) => {
        this.router.navigate(['/entities/procedimiento-nivel']);
      }
    );
  }

  update() {
    this.procedimientoNivelService.update(this.procedimientoNivel._id, this.procedimientoNivel).subscribe(
      (response) => {
        this.router.navigate(['/entities/procedimiento-nivel']);
      }
    );
  }
}
