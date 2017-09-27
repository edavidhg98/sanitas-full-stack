import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AnticipoService } from './anticipo.service';
import { Anticipo } from './anticipo.model';

import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';
import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';
import { ProcedimientoService } from '../procedimiento/procedimiento.service';
import { Procedimiento } from '../procedimiento/procedimiento.model';

@Component({
  selector: 'app-anticipo-upsert',
  templateUrl: './anticipo-upsert.component.html'
})
export class AnticipoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  anticipo: Anticipo;

  /** Many-To-One Relationships */
  sucursals: Sucursal[];
  entidads: Entidad[];
  procedimientos: Procedimiento[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private anticipoService: AnticipoService,
    private sucursalService: SucursalService,
    private entidadService: EntidadService,
    private procedimientoService: ProcedimientoService,
  ) { }

  ngOnInit() {
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.procedimientoService.getAll().subscribe(procedimientos => this.procedimientos = procedimientos);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.anticipoService.getById(id).subscribe(anticipo => this.anticipo = anticipo);
      }
    });
  }

  save(formValues) {
    this.anticipo = formValues;
    this.anticipoService.insert(this.anticipo).subscribe(
      (response) => {
        this.router.navigate(['/entities/anticipo']);
      }
    );
  }

  update() {
    this.anticipoService.update(this.anticipo._id, this.anticipo).subscribe(
      (response) => {
        this.router.navigate(['/entities/anticipo']);
      }
    );
  }
}
