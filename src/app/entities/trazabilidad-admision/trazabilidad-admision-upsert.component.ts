import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TrazabilidadAdmisionService } from './trazabilidad-admision.service';
import { TrazabilidadAdmision } from './trazabilidad-admision.model';

import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';
import { TipoAdmisionService } from '../tipo-admision/tipo-admision.service';
import { TipoAdmision } from '../tipo-admision/tipo-admision.model';
import { ConsultorioService } from '../consultorio/consultorio.service';
import { Consultorio } from '../consultorio/consultorio.model';
import { MotivoService } from '../motivo/motivo.service';
import { Motivo } from '../motivo/motivo.model';

@Component({
  selector: 'app-trazabilidad-admision-upsert',
  templateUrl: './trazabilidad-admision-upsert.component.html'
})
export class TrazabilidadAdmisionUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  trazabilidadAdmision: TrazabilidadAdmision;

  /** Many-To-One Relationships */
  sucursals: Sucursal[];
  tipoAdmisions: TipoAdmision[];
  consultorios: Consultorio[];
  motivos: Motivo[];
  motivo1s: Motivo[];
  motivo2s: Motivo[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private trazabilidadAdmisionService: TrazabilidadAdmisionService,
    private sucursalService: SucursalService,
    private tipoAdmisionService: TipoAdmisionService,
    private consultorioService: ConsultorioService,
    private motivoService: MotivoService,
  ) { }

  ngOnInit() {
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.tipoAdmisionService.getAll().subscribe(tipoAdmisions => this.tipoAdmisions = tipoAdmisions);
    this.consultorioService.getAll().subscribe(consultorios => this.consultorios = consultorios);
    this.motivoService.getAll().subscribe(motivos => this.motivos = motivos);
    this.motivoService.getAll().subscribe(motivo1s => this.motivo1s = motivo1s);
    this.motivoService.getAll().subscribe(motivo2s => this.motivo2s = motivo2s);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.trazabilidadAdmisionService.getById(id).subscribe(trazabilidadAdmision => this.trazabilidadAdmision = trazabilidadAdmision);
      }
    });
  }

  save(formValues) {
    this.trazabilidadAdmision = formValues;
    this.trazabilidadAdmisionService.insert(this.trazabilidadAdmision).subscribe(
      (response) => {
        this.router.navigate(['/entities/trazabilidad-admision']);
      }
    );
  }

  update() {
    this.trazabilidadAdmisionService.update(this.trazabilidadAdmision._id, this.trazabilidadAdmision).subscribe(
      (response) => {
        this.router.navigate(['/entities/trazabilidad-admision']);
      }
    );
  }
}
