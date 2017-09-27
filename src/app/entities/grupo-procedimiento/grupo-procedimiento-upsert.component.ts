import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GrupoProcedimientoService } from './grupo-procedimiento.service';
import { GrupoProcedimiento } from './grupo-procedimiento.model';


@Component({
  selector: 'app-grupo-procedimiento-upsert',
  templateUrl: './grupo-procedimiento-upsert.component.html'
})
export class GrupoProcedimientoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  grupoProcedimiento: GrupoProcedimiento;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private grupoProcedimientoService: GrupoProcedimientoService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.grupoProcedimientoService.getById(id).subscribe(grupoProcedimiento => this.grupoProcedimiento = grupoProcedimiento);
      }
    });
  }

  save(formValues) {
    this.grupoProcedimiento = formValues;
    this.grupoProcedimientoService.insert(this.grupoProcedimiento).subscribe(
      (response) => {
        this.router.navigate(['/entities/grupo-procedimiento']);
      }
    );
  }

  update() {
    this.grupoProcedimientoService.update(this.grupoProcedimiento._id, this.grupoProcedimiento).subscribe(
      (response) => {
        this.router.navigate(['/entities/grupo-procedimiento']);
      }
    );
  }
}
