import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CentroCostoValidoService } from './centro-costo-valido.service';
import { CentroCostoValido } from './centro-costo-valido.model';

import { PrestadorService } from '../prestador/prestador.service';
import { Prestador } from '../prestador/prestador.model';

@Component({
  selector: 'app-centro-costo-valido-upsert',
  templateUrl: './centro-costo-valido-upsert.component.html'
})
export class CentroCostoValidoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  centroCostoValido: CentroCostoValido;

  /** Many-To-One Relationships */
  centroCostoValido1s: CentroCostoValido[];
  centroCostoValido2s: CentroCostoValido[];
  prestadors: Prestador[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private centroCostoValidoService: CentroCostoValidoService,
    private prestadorService: PrestadorService,
  ) { }

  ngOnInit() {
    this.centroCostoValidoService.getAll().subscribe(centroCostoValido1s => this.centroCostoValido1s = centroCostoValido1s);
    this.centroCostoValidoService.getAll().subscribe(centroCostoValido2s => this.centroCostoValido2s = centroCostoValido2s);
    this.prestadorService.getAll().subscribe(prestadors => this.prestadors = prestadors);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.centroCostoValidoService.getById(id).subscribe(centroCostoValido => this.centroCostoValido = centroCostoValido);
      }
    });
  }

  save(formValues) {
    this.centroCostoValido = formValues;
    this.centroCostoValidoService.insert(this.centroCostoValido).subscribe(
      (response) => {
        this.router.navigate(['/entities/centro-costo-valido']);
      }
    );
  }

  update() {
    this.centroCostoValidoService.update(this.centroCostoValido._id, this.centroCostoValido).subscribe(
      (response) => {
        this.router.navigate(['/entities/centro-costo-valido']);
      }
    );
  }
}
