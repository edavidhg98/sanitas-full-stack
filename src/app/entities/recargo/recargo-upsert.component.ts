import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { RecargoService } from './recargo.service';
import { Recargo } from './recargo.model';

import { PrestadorService } from '../prestador/prestador.service';
import { Prestador } from '../prestador/prestador.model';

@Component({
  selector: 'app-recargo-upsert',
  templateUrl: './recargo-upsert.component.html'
})
export class RecargoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  recargo: Recargo;

  /** Many-To-One Relationships */
  prestadors: Prestador[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recargoService: RecargoService,
    private prestadorService: PrestadorService,
  ) { }

  ngOnInit() {
    this.prestadorService.getAll().subscribe(prestadors => this.prestadors = prestadors);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.recargoService.getById(id).subscribe(recargo => this.recargo = recargo);
      }
    });
  }

  save(formValues) {
    this.recargo = formValues;
    this.recargoService.insert(this.recargo).subscribe(
      (response) => {
        this.router.navigate(['/entities/recargo']);
      }
    );
  }

  update() {
    this.recargoService.update(this.recargo._id, this.recargo).subscribe(
      (response) => {
        this.router.navigate(['/entities/recargo']);
      }
    );
  }
}
