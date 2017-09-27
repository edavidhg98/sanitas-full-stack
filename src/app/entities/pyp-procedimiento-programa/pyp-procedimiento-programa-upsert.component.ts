import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PypProcedimientoProgramaService } from './pyp-procedimiento-programa.service';
import { PypProcedimientoPrograma } from './pyp-procedimiento-programa.model';

import { MotivoService } from '../motivo/motivo.service';
import { Motivo } from '../motivo/motivo.model';
import { ProcedimientoService } from '../procedimiento/procedimiento.service';
import { Procedimiento } from '../procedimiento/procedimiento.model';
import { PypProgramasService } from '../pyp-programas/pyp-programas.service';
import { PypProgramas } from '../pyp-programas/pyp-programas.model';

@Component({
  selector: 'app-pyp-procedimiento-programa-upsert',
  templateUrl: './pyp-procedimiento-programa-upsert.component.html'
})
export class PypProcedimientoProgramaUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  pypProcedimientoPrograma: PypProcedimientoPrograma;

  /** Many-To-One Relationships */
  motivos: Motivo[];
  procedimientos: Procedimiento[];
  pypProgramass: PypProgramas[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pypProcedimientoProgramaService: PypProcedimientoProgramaService,
    private motivoService: MotivoService,
    private procedimientoService: ProcedimientoService,
    private pypProgramasService: PypProgramasService,
  ) { }

  ngOnInit() {
    this.motivoService.getAll().subscribe(motivos => this.motivos = motivos);
    this.procedimientoService.getAll().subscribe(procedimientos => this.procedimientos = procedimientos);
    this.pypProgramasService.getAll().subscribe(pypProgramass => this.pypProgramass = pypProgramass);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.pypProcedimientoProgramaService.getById(id).subscribe(pypProcedimientoPrograma => this.pypProcedimientoPrograma = pypProcedimientoPrograma);
      }
    });
  }

  save(formValues) {
    this.pypProcedimientoPrograma = formValues;
    this.pypProcedimientoProgramaService.insert(this.pypProcedimientoPrograma).subscribe(
      (response) => {
        this.router.navigate(['/entities/pyp-procedimiento-programa']);
      }
    );
  }

  update() {
    this.pypProcedimientoProgramaService.update(this.pypProcedimientoPrograma._id, this.pypProcedimientoPrograma).subscribe(
      (response) => {
        this.router.navigate(['/entities/pyp-procedimiento-programa']);
      }
    );
  }
}
