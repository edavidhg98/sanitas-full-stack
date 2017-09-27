import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RecargoAutomaticoService } from './recargo-automatico.service';
import { RecargoAutomatico } from './recargo-automatico.model';

import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';

@Component({
  selector: 'app-recargo-automatico-upsert',
  templateUrl: './recargo-automatico-upsert.component.html'
})
export class RecargoAutomaticoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  recargoAutomatico: RecargoAutomatico;

  /** Many-To-One Relationships */
  entidads: Entidad[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recargoAutomaticoService: RecargoAutomaticoService,
    private entidadService: EntidadService,
  ) { }

  ngOnInit() {
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.recargoAutomaticoService.getById(id).subscribe(recargoAutomatico => this.recargoAutomatico = recargoAutomatico);
      }
    });
  }

  save(formValues) {
    this.recargoAutomatico = formValues;
    this.recargoAutomaticoService.insert(this.recargoAutomatico).subscribe(
      (response) => {
        this.router.navigate(['/entities/recargo-automatico']);
      }
    );
  }

  update() {
    this.recargoAutomaticoService.update(this.recargoAutomatico._id, this.recargoAutomatico).subscribe(
      (response) => {
        this.router.navigate(['/entities/recargo-automatico']);
      }
    );
  }
}
