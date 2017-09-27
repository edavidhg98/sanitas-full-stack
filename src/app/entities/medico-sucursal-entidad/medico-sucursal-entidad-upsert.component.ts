import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MedicoSucursalEntidadService } from './medico-sucursal-entidad.service';
import { MedicoSucursalEntidad } from './medico-sucursal-entidad.model';


@Component({
  selector: 'app-medico-sucursal-entidad-upsert',
  templateUrl: './medico-sucursal-entidad-upsert.component.html'
})
export class MedicoSucursalEntidadUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  medicoSucursalEntidad: MedicoSucursalEntidad;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private medicoSucursalEntidadService: MedicoSucursalEntidadService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.medicoSucursalEntidadService.getById(id).subscribe(medicoSucursalEntidad => this.medicoSucursalEntidad = medicoSucursalEntidad);
      }
    });
  }

  save(formValues) {
    this.medicoSucursalEntidad = formValues;
    this.medicoSucursalEntidadService.insert(this.medicoSucursalEntidad).subscribe(
      (response) => {
        this.router.navigate(['/entities/medico-sucursal-entidad']);
      }
    );
  }

  update() {
    this.medicoSucursalEntidadService.update(this.medicoSucursalEntidad._id, this.medicoSucursalEntidad).subscribe(
      (response) => {
        this.router.navigate(['/entities/medico-sucursal-entidad']);
      }
    );
  }
}
