import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CamaPlanService } from './cama-plan.service';
import { CamaPlan } from './cama-plan.model';

import { CamaService } from '../cama/cama.service';
import { Cama } from '../cama/cama.model';
import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';
import { TipoPlanService } from '../tipo-plan/tipo-plan.service';
import { TipoPlan } from '../tipo-plan/tipo-plan.model';

@Component({
  selector: 'app-cama-plan-upsert',
  templateUrl: './cama-plan-upsert.component.html'
})
export class CamaPlanUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  camaPlan: CamaPlan;

  /** Many-To-One Relationships */
  camas: Cama[];
  entidads: Entidad[];
  tipoPlans: TipoPlan[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private camaPlanService: CamaPlanService,
    private camaService: CamaService,
    private entidadService: EntidadService,
    private tipoPlanService: TipoPlanService,
  ) { }

  ngOnInit() {
    this.camaService.getAll().subscribe(camas => this.camas = camas);
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.tipoPlanService.getAll().subscribe(tipoPlans => this.tipoPlans = tipoPlans);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.camaPlanService.getById(id).subscribe(camaPlan => this.camaPlan = camaPlan);
      }
    });
  }

  save(formValues) {
    this.camaPlan = formValues;
    this.camaPlanService.insert(this.camaPlan).subscribe(
      (response) => {
        this.router.navigate(['/entities/cama-plan']);
      }
    );
  }

  update() {
    this.camaPlanService.update(this.camaPlan._id, this.camaPlan).subscribe(
      (response) => {
        this.router.navigate(['/entities/cama-plan']);
      }
    );
  }
}
