import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RutaLiquidacionService } from './ruta-liquidacion.service';
import { RutaLiquidacion } from './ruta-liquidacion.model';


@Component({
  selector: 'app-ruta-liquidacion-upsert',
  templateUrl: './ruta-liquidacion-upsert.component.html'
})
export class RutaLiquidacionUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  rutaLiquidacion: RutaLiquidacion;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private rutaLiquidacionService: RutaLiquidacionService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.rutaLiquidacionService.getById(id).subscribe(rutaLiquidacion => this.rutaLiquidacion = rutaLiquidacion);
      }
    });
  }

  save(formValues) {
    this.rutaLiquidacion = formValues;
    this.rutaLiquidacionService.insert(this.rutaLiquidacion).subscribe(
      (response) => {
        this.router.navigate(['/entities/ruta-liquidacion']);
      }
    );
  }

  update() {
    this.rutaLiquidacionService.update(this.rutaLiquidacion._id, this.rutaLiquidacion).subscribe(
      (response) => {
        this.router.navigate(['/entities/ruta-liquidacion']);
      }
    );
  }
}
