import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PrestadorCentroCostoUnicoService } from './prestador-centro-costo-unico.service';
import { PrestadorCentroCostoUnico } from './prestador-centro-costo-unico.model';

import { PrestadorService } from '../prestador/prestador.service';
import { Prestador } from '../prestador/prestador.model';

@Component({
  selector: 'app-prestador-centro-costo-unico-upsert',
  templateUrl: './prestador-centro-costo-unico-upsert.component.html'
})
export class PrestadorCentroCostoUnicoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  prestadorCentroCostoUnico: PrestadorCentroCostoUnico;

  /** Many-To-One Relationships */
  prestadors: Prestador[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private prestadorCentroCostoUnicoService: PrestadorCentroCostoUnicoService,
    private prestadorService: PrestadorService,
  ) { }

  ngOnInit() {
    this.prestadorService.getAll().subscribe(prestadors => this.prestadors = prestadors);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.prestadorCentroCostoUnicoService.getById(id).subscribe(prestadorCentroCostoUnico => this.prestadorCentroCostoUnico = prestadorCentroCostoUnico);
      }
    });
  }

  save(formValues) {
    this.prestadorCentroCostoUnico = formValues;
    this.prestadorCentroCostoUnicoService.insert(this.prestadorCentroCostoUnico).subscribe(
      (response) => {
        this.router.navigate(['/entities/prestador-centro-costo-unico']);
      }
    );
  }

  update() {
    this.prestadorCentroCostoUnicoService.update(this.prestadorCentroCostoUnico._id, this.prestadorCentroCostoUnico).subscribe(
      (response) => {
        this.router.navigate(['/entities/prestador-centro-costo-unico']);
      }
    );
  }
}
