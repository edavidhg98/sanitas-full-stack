import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PrestadorService } from './prestador.service';
import { Prestador } from './prestador.model';

import { CiudadService } from '../ciudad/ciudad.service';
import { Ciudad } from '../ciudad/ciudad.model';

@Component({
  selector: 'app-prestador-upsert',
  templateUrl: './prestador-upsert.component.html'
})
export class PrestadorUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  prestador: Prestador;

  /** Many-To-One Relationships */
  ciudads: Ciudad[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private prestadorService: PrestadorService,
    private ciudadService: CiudadService,
  ) { }

  ngOnInit() {
    this.ciudadService.getAll().subscribe(ciudads => this.ciudads = ciudads);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.prestadorService.getById(id).subscribe(prestador => this.prestador = prestador);
      }
    });
  }

  save(formValues) {
    this.prestador = formValues;
    this.prestadorService.insert(this.prestador).subscribe(
      (response) => {
        this.router.navigate(['/entities/prestador']);
      }
    );
  }

  update() {
    this.prestadorService.update(this.prestador._id, this.prestador).subscribe(
      (response) => {
        this.router.navigate(['/entities/prestador']);
      }
    );
  }
}
