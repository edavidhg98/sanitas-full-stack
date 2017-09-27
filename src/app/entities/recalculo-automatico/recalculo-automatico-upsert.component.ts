import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RecalculoAutomaticoService } from './recalculo-automatico.service';
import { RecalculoAutomatico } from './recalculo-automatico.model';

import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';
import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';

@Component({
  selector: 'app-recalculo-automatico-upsert',
  templateUrl: './recalculo-automatico-upsert.component.html'
})
export class RecalculoAutomaticoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  recalculoAutomatico: RecalculoAutomatico;

  /** Many-To-One Relationships */
  sucursals: Sucursal[];
  entidads: Entidad[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recalculoAutomaticoService: RecalculoAutomaticoService,
    private sucursalService: SucursalService,
    private entidadService: EntidadService,
  ) { }

  ngOnInit() {
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.recalculoAutomaticoService.getById(id).subscribe(recalculoAutomatico => this.recalculoAutomatico = recalculoAutomatico);
      }
    });
  }

  save(formValues) {
    this.recalculoAutomatico = formValues;
    this.recalculoAutomaticoService.insert(this.recalculoAutomatico).subscribe(
      (response) => {
        this.router.navigate(['/entities/recalculo-automatico']);
      }
    );
  }

  update() {
    this.recalculoAutomaticoService.update(this.recalculoAutomatico._id, this.recalculoAutomatico).subscribe(
      (response) => {
        this.router.navigate(['/entities/recalculo-automatico']);
      }
    );
  }
}
