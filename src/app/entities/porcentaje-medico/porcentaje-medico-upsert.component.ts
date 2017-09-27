import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PorcentajeMedicoService } from './porcentaje-medico.service';
import { PorcentajeMedico } from './porcentaje-medico.model';


@Component({
  selector: 'app-porcentaje-medico-upsert',
  templateUrl: './porcentaje-medico-upsert.component.html'
})
export class PorcentajeMedicoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  porcentajeMedico: PorcentajeMedico;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private porcentajeMedicoService: PorcentajeMedicoService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.porcentajeMedicoService.getById(id).subscribe(porcentajeMedico => this.porcentajeMedico = porcentajeMedico);
      }
    });
  }

  save(formValues) {
    this.porcentajeMedico = formValues;
    this.porcentajeMedicoService.insert(this.porcentajeMedico).subscribe(
      (response) => {
        this.router.navigate(['/entities/porcentaje-medico']);
      }
    );
  }

  update() {
    this.porcentajeMedicoService.update(this.porcentajeMedico._id, this.porcentajeMedico).subscribe(
      (response) => {
        this.router.navigate(['/entities/porcentaje-medico']);
      }
    );
  }
}
