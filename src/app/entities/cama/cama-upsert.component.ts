import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CamaService } from './cama.service';
import { Cama } from './cama.model';

import { FotoEstadoCamaService } from '../foto-estado-cama/foto-estado-cama.service';
import { FotoEstadoCama } from '../foto-estado-cama/foto-estado-cama.model';
import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';
import { ProcedimientoService } from '../procedimiento/procedimiento.service';
import { Procedimiento } from '../procedimiento/procedimiento.model';
import { SeccionService } from '../seccion/seccion.service';
import { Seccion } from '../seccion/seccion.model';
import { TipoCamaService } from '../tipo-cama/tipo-cama.service';
import { TipoCama } from '../tipo-cama/tipo-cama.model';

@Component({
  selector: 'app-cama-upsert',
  templateUrl: './cama-upsert.component.html'
})
export class CamaUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  cama: Cama;

  /** Many-To-One Relationships */
  fotoEstadoCamas: FotoEstadoCama[];
  sucursals: Sucursal[];
  procedimientos: Procedimiento[];
  procedimiento1s: Procedimiento[];
  seccions: Seccion[];
  tipoCamas: TipoCama[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private camaService: CamaService,
    private fotoEstadoCamaService: FotoEstadoCamaService,
    private sucursalService: SucursalService,
    private procedimientoService: ProcedimientoService,
    private seccionService: SeccionService,
    private tipoCamaService: TipoCamaService,
  ) { }

  ngOnInit() {
    this.fotoEstadoCamaService.getAll().subscribe(fotoEstadoCamas => this.fotoEstadoCamas = fotoEstadoCamas);
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.procedimientoService.getAll().subscribe(procedimientos => this.procedimientos = procedimientos);
    this.procedimientoService.getAll().subscribe(procedimiento1s => this.procedimiento1s = procedimiento1s);
    this.seccionService.getAll().subscribe(seccions => this.seccions = seccions);
    this.tipoCamaService.getAll().subscribe(tipoCamas => this.tipoCamas = tipoCamas);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.camaService.getById(id).subscribe(cama => this.cama = cama);
      }
    });
  }

  save(formValues) {
    this.cama = formValues;
    this.camaService.insert(this.cama).subscribe(
      (response) => {
        this.router.navigate(['/entities/cama']);
      }
    );
  }

  update() {
    this.camaService.update(this.cama._id, this.cama).subscribe(
      (response) => {
        this.router.navigate(['/entities/cama']);
      }
    );
  }
}
