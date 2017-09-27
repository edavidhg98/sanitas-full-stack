import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DiagnosticoService } from './diagnostico.service';
import { Diagnostico } from './diagnostico.model';


@Component({
  selector: 'app-diagnostico-upsert',
  templateUrl: './diagnostico-upsert.component.html'
})
export class DiagnosticoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  diagnostico: Diagnostico;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private diagnosticoService: DiagnosticoService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.diagnosticoService.getById(id).subscribe(diagnostico => this.diagnostico = diagnostico);
      }
    });
  }

  save(formValues) {
    this.diagnostico = formValues;
    this.diagnosticoService.insert(this.diagnostico).subscribe(
      (response) => {
        this.router.navigate(['/entities/diagnostico']);
      }
    );
  }

  update() {
    this.diagnosticoService.update(this.diagnostico._id, this.diagnostico).subscribe(
      (response) => {
        this.router.navigate(['/entities/diagnostico']);
      }
    );
  }
}
