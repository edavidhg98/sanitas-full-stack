import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MonedaService } from './moneda.service';
import { Moneda } from './moneda.model';


@Component({
  selector: 'app-moneda-upsert',
  templateUrl: './moneda-upsert.component.html'
})
export class MonedaUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  moneda: Moneda;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private monedaService: MonedaService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.monedaService.getById(id).subscribe(moneda => this.moneda = moneda);
      }
    });
  }

  save(formValues) {
    this.moneda = formValues;
    this.monedaService.insert(this.moneda).subscribe(
      (response) => {
        this.router.navigate(['/entities/moneda']);
      }
    );
  }

  update() {
    this.monedaService.update(this.moneda._id, this.moneda).subscribe(
      (response) => {
        this.router.navigate(['/entities/moneda']);
      }
    );
  }
}
