import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TipoCirugiaService } from './tipo-cirugia.service';
import { TipoCirugia } from './tipo-cirugia.model';

import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';

@Component({
  selector: 'app-tipo-cirugia-upsert',
  templateUrl: './tipo-cirugia-upsert.component.html'
})
export class TipoCirugiaUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  tipoCirugia: TipoCirugia;

  /** Many-To-One Relationships */
  entidads: Entidad[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tipoCirugiaService: TipoCirugiaService,
    private entidadService: EntidadService,
  ) { }

  ngOnInit() {
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.tipoCirugiaService.getById(id).subscribe(tipoCirugia => this.tipoCirugia = tipoCirugia);
      }
    });
  }

  save(formValues) {
    this.tipoCirugia = formValues;
    this.tipoCirugiaService.insert(this.tipoCirugia).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipo-cirugia']);
      }
    );
  }

  update() {
    this.tipoCirugiaService.update(this.tipoCirugia._id, this.tipoCirugia).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipo-cirugia']);
      }
    );
  }
}
