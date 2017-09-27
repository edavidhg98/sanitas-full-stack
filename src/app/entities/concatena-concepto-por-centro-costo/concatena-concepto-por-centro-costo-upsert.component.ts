import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConcatenaConceptoPorCentroCostoService } from './concatena-concepto-por-centro-costo.service';
import { ConcatenaConceptoPorCentroCosto } from './concatena-concepto-por-centro-costo.model';

import { SucursalService } from '../sucursal/sucursal.service';
import { Sucursal } from '../sucursal/sucursal.model';

@Component({
  selector: 'app-concatena-concepto-por-centro-costo-upsert',
  templateUrl: './concatena-concepto-por-centro-costo-upsert.component.html'
})
export class ConcatenaConceptoPorCentroCostoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  concatenaConceptoPorCentroCosto: ConcatenaConceptoPorCentroCosto;

  /** Many-To-One Relationships */
  sucursals: Sucursal[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private concatenaConceptoPorCentroCostoService: ConcatenaConceptoPorCentroCostoService,
    private sucursalService: SucursalService,
  ) { }

  ngOnInit() {
    this.sucursalService.getAll().subscribe(sucursals => this.sucursals = sucursals);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.concatenaConceptoPorCentroCostoService.getById(id).subscribe(concatenaConceptoPorCentroCosto => this.concatenaConceptoPorCentroCosto = concatenaConceptoPorCentroCosto);
      }
    });
  }

  save(formValues) {
    this.concatenaConceptoPorCentroCosto = formValues;
    this.concatenaConceptoPorCentroCostoService.insert(this.concatenaConceptoPorCentroCosto).subscribe(
      (response) => {
        this.router.navigate(['/entities/concatena-concepto-por-centro-costo']);
      }
    );
  }

  update() {
    this.concatenaConceptoPorCentroCostoService.update(this.concatenaConceptoPorCentroCosto._id, this.concatenaConceptoPorCentroCosto).subscribe(
      (response) => {
        this.router.navigate(['/entities/concatena-concepto-por-centro-costo']);
      }
    );
  }
}
