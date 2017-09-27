import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AdmisionObservacionesService } from './admision-observaciones.service';
import { AdmisionObservaciones } from './admision-observaciones.model';

import { CamaService } from '../cama/cama.service';
import { Cama } from '../cama/cama.model';
import { MotivoService } from '../motivo/motivo.service';
import { Motivo } from '../motivo/motivo.model';

@Component({
  selector: 'app-admision-observaciones-upsert',
  templateUrl: './admision-observaciones-upsert.component.html'
})
export class AdmisionObservacionesUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  admisionObservaciones: AdmisionObservaciones;

  /** Many-To-One Relationships */
  camas: Cama[];
  motivos: Motivo[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private admisionObservacionesService: AdmisionObservacionesService,
    private camaService: CamaService,
    private motivoService: MotivoService,
  ) { }

  ngOnInit() {
    this.camaService.getAll().subscribe(camas => this.camas = camas);
    this.motivoService.getAll().subscribe(motivos => this.motivos = motivos);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.admisionObservacionesService.getById(id).subscribe(admisionObservaciones => this.admisionObservaciones = admisionObservaciones);
      }
    });
  }

  save(formValues) {
    this.admisionObservaciones = formValues;
    this.admisionObservacionesService.insert(this.admisionObservaciones).subscribe(
      (response) => {
        this.router.navigate(['/entities/admision-observaciones']);
      }
    );
  }

  update() {
    this.admisionObservacionesService.update(this.admisionObservaciones._id, this.admisionObservaciones).subscribe(
      (response) => {
        this.router.navigate(['/entities/admision-observaciones']);
      }
    );
  }
}
