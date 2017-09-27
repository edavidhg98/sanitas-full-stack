import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ParDependenciaCampoService } from './par-dependencia-campo.service';
import { ParDependenciaCampo } from './par-dependencia-campo.model';


@Component({
  selector: 'app-par-dependencia-campo-upsert',
  templateUrl: './par-dependencia-campo-upsert.component.html'
})
export class ParDependenciaCampoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  parDependenciaCampo: ParDependenciaCampo;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private parDependenciaCampoService: ParDependenciaCampoService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.parDependenciaCampoService.getById(id).subscribe(parDependenciaCampo => this.parDependenciaCampo = parDependenciaCampo);
      }
    });
  }

  save(formValues) {
    this.parDependenciaCampo = formValues;
    this.parDependenciaCampoService.insert(this.parDependenciaCampo).subscribe(
      (response) => {
        this.router.navigate(['/entities/par-dependencia-campo']);
      }
    );
  }

  update() {
    this.parDependenciaCampoService.update(this.parDependenciaCampo._id, this.parDependenciaCampo).subscribe(
      (response) => {
        this.router.navigate(['/entities/par-dependencia-campo']);
      }
    );
  }
}
