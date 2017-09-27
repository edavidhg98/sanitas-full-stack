import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MedicoSucursalService } from './medico-sucursal.service';
import { MedicoSucursal } from './medico-sucursal.model';


@Component({
  selector: 'app-medico-sucursal-upsert',
  templateUrl: './medico-sucursal-upsert.component.html'
})
export class MedicoSucursalUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  medicoSucursal: MedicoSucursal;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private medicoSucursalService: MedicoSucursalService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.medicoSucursalService.getById(id).subscribe(medicoSucursal => this.medicoSucursal = medicoSucursal);
      }
    });
  }

  save(formValues) {
    this.medicoSucursal = formValues;
    this.medicoSucursalService.insert(this.medicoSucursal).subscribe(
      (response) => {
        this.router.navigate(['/entities/medico-sucursal']);
      }
    );
  }

  update() {
    this.medicoSucursalService.update(this.medicoSucursal._id, this.medicoSucursal).subscribe(
      (response) => {
        this.router.navigate(['/entities/medico-sucursal']);
      }
    );
  }
}
