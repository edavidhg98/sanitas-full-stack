import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TipoPlanService } from './tipo-plan.service';
import { TipoPlan } from './tipo-plan.model';

import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';

@Component({
  selector: 'app-tipo-plan-upsert',
  templateUrl: './tipo-plan-upsert.component.html'
})
export class TipoPlanUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  tipoPlan: TipoPlan;

  /** Many-To-One Relationships */
  entidads: Entidad[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tipoPlanService: TipoPlanService,
    private entidadService: EntidadService,
  ) { }

  ngOnInit() {
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.tipoPlanService.getById(id).subscribe(tipoPlan => this.tipoPlan = tipoPlan);
      }
    });
  }

  save(formValues) {
    this.tipoPlan = formValues;
    this.tipoPlanService.insert(this.tipoPlan).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipo-plan']);
      }
    );
  }

  update() {
    this.tipoPlanService.update(this.tipoPlan._id, this.tipoPlan).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipo-plan']);
      }
    );
  }
}
