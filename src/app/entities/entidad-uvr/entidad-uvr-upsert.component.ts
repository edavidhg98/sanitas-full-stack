import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EntidadUvrService } from './entidad-uvr.service';
import { EntidadUvr } from './entidad-uvr.model';

import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';

@Component({
  selector: 'app-entidad-uvr-upsert',
  templateUrl: './entidad-uvr-upsert.component.html'
})
export class EntidadUvrUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  entidadUvr: EntidadUvr;

  /** Many-To-One Relationships */
  entidads: Entidad[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private entidadUvrService: EntidadUvrService,
    private entidadService: EntidadService,
  ) { }

  ngOnInit() {
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.entidadUvrService.getById(id).subscribe(entidadUvr => this.entidadUvr = entidadUvr);
      }
    });
  }

  save(formValues) {
    this.entidadUvr = formValues;
    this.entidadUvrService.insert(this.entidadUvr).subscribe(
      (response) => {
        this.router.navigate(['/entities/entidad-uvr']);
      }
    );
  }

  update() {
    this.entidadUvrService.update(this.entidadUvr._id, this.entidadUvr).subscribe(
      (response) => {
        this.router.navigate(['/entities/entidad-uvr']);
      }
    );
  }
}
