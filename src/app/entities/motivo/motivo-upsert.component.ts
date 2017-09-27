import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MotivoService } from './motivo.service';
import { Motivo } from './motivo.model';

import { TipoMotivoService } from '../tipo-motivo/tipo-motivo.service';
import { TipoMotivo } from '../tipo-motivo/tipo-motivo.model';

@Component({
  selector: 'app-motivo-upsert',
  templateUrl: './motivo-upsert.component.html'
})
export class MotivoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  motivo: Motivo;

  /** Many-To-One Relationships */
  tipoMotivos: TipoMotivo[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private motivoService: MotivoService,
    private tipoMotivoService: TipoMotivoService,
  ) { }

  ngOnInit() {
    this.tipoMotivoService.getAll().subscribe(tipoMotivos => this.tipoMotivos = tipoMotivos);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.motivoService.getById(id).subscribe(motivo => this.motivo = motivo);
      }
    });
  }

  save(formValues) {
    this.motivo = formValues;
    this.motivoService.insert(this.motivo).subscribe(
      (response) => {
        this.router.navigate(['/entities/motivo']);
      }
    );
  }

  update() {
    this.motivoService.update(this.motivo._id, this.motivo).subscribe(
      (response) => {
        this.router.navigate(['/entities/motivo']);
      }
    );
  }
}
