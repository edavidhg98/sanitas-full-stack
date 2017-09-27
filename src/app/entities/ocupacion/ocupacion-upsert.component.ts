import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { OcupacionService } from './ocupacion.service';
import { Ocupacion } from './ocupacion.model';


@Component({
  selector: 'app-ocupacion-upsert',
  templateUrl: './ocupacion-upsert.component.html'
})
export class OcupacionUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  ocupacion: Ocupacion;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ocupacionService: OcupacionService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.ocupacionService.getById(id).subscribe(ocupacion => this.ocupacion = ocupacion);
      }
    });
  }

  save(formValues) {
    this.ocupacion = formValues;
    this.ocupacionService.insert(this.ocupacion).subscribe(
      (response) => {
        this.router.navigate(['/entities/ocupacion']);
      }
    );
  }

  update() {
    this.ocupacionService.update(this.ocupacion._id, this.ocupacion).subscribe(
      (response) => {
        this.router.navigate(['/entities/ocupacion']);
      }
    );
  }
}
