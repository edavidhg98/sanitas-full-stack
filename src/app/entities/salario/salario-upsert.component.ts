import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SalarioService } from './salario.service';
import { Salario } from './salario.model';


@Component({
  selector: 'app-salario-upsert',
  templateUrl: './salario-upsert.component.html'
})
export class SalarioUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  salario: Salario;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private salarioService: SalarioService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.salarioService.getById(id).subscribe(salario => this.salario = salario);
      }
    });
  }

  save(formValues) {
    this.salario = formValues;
    this.salarioService.insert(this.salario).subscribe(
      (response) => {
        this.router.navigate(['/entities/salario']);
      }
    );
  }

  update() {
    this.salarioService.update(this.salario._id, this.salario).subscribe(
      (response) => {
        this.router.navigate(['/entities/salario']);
      }
    );
  }
}
