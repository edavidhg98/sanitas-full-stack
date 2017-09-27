import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NumeroSecuenciaService } from './numero-secuencia.service';
import { NumeroSecuencia } from './numero-secuencia.model';

import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';

@Component({
  selector: 'app-numero-secuencia-upsert',
  templateUrl: './numero-secuencia-upsert.component.html'
})
export class NumeroSecuenciaUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  numeroSecuencia: NumeroSecuencia;

  /** Many-To-One Relationships */
  sucursals: Sucursal[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private numeroSecuenciaService: NumeroSecuenciaService,
    private sucursalService: SucursalService,
  ) { }

  ngOnInit() {
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.numeroSecuenciaService.getById(id).subscribe(numeroSecuencia => this.numeroSecuencia = numeroSecuencia);
      }
    });
  }

  save(formValues) {
    this.numeroSecuencia = formValues;
    this.numeroSecuenciaService.insert(this.numeroSecuencia).subscribe(
      (response) => {
        this.router.navigate(['/entities/numero-secuencia']);
      }
    );
  }

  update() {
    this.numeroSecuenciaService.update(this.numeroSecuencia._id, this.numeroSecuencia).subscribe(
      (response) => {
        this.router.navigate(['/entities/numero-secuencia']);
      }
    );
  }
}
