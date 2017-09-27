import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TriageService } from './triage.service';
import { Triage } from './triage.model';

import { ConsultorioService } from '../consultorio/consultorio.service';
import { Consultorio } from '../consultorio/consultorio.model';
import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';
import { MotivoService } from '../motivo/motivo.service';
import { Motivo } from '../motivo/motivo.model';
import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';

@Component({
  selector: 'app-triage-upsert',
  templateUrl: './triage-upsert.component.html'
})
export class TriageUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  triage: Triage;

  /** Many-To-One Relationships */
  consultorios: Consultorio[];
  entidads: Entidad[];
  motivos: Motivo[];
  sucursals: Sucursal[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private triageService: TriageService,
    private consultorioService: ConsultorioService,
    private entidadService: EntidadService,
    private motivoService: MotivoService,
    private sucursalService: SucursalService,
  ) { }

  ngOnInit() {
    this.consultorioService.getAll().subscribe(consultorios => this.consultorios = consultorios);
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.motivoService.getAll().subscribe(motivos => this.motivos = motivos);
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.triageService.getById(id).subscribe(triage => this.triage = triage);
      }
    });
  }

  save(formValues) {
    this.triage = formValues;
    this.triageService.insert(this.triage).subscribe(
      (response) => {
        this.router.navigate(['/entities/triage']);
      }
    );
  }

  update() {
    this.triageService.update(this.triage._id, this.triage).subscribe(
      (response) => {
        this.router.navigate(['/entities/triage']);
      }
    );
  }
}
