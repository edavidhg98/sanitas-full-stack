import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AutorizacionBhService } from './autorizacion-bh.service';
import { AutorizacionBh } from './autorizacion-bh.model';

import { ProcedimientoService } from '../procedimiento/procedimiento.service';
import { Procedimiento } from '../procedimiento/procedimiento.model';

@Component({
  selector: 'app-autorizacion-bh-upsert',
  templateUrl: './autorizacion-bh-upsert.component.html'
})
export class AutorizacionBhUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  autorizacionBh: AutorizacionBh;

  /** Many-To-One Relationships */
  procedimientos: Procedimiento[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private autorizacionBhService: AutorizacionBhService,
    private procedimientoService: ProcedimientoService,
  ) { }

  ngOnInit() {
    this.procedimientoService.getAll().subscribe(procedimientos => this.procedimientos = procedimientos);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.autorizacionBhService.getById(id).subscribe(autorizacionBh => this.autorizacionBh = autorizacionBh);
      }
    });
  }

  save(formValues) {
    this.autorizacionBh = formValues;
    this.autorizacionBhService.insert(this.autorizacionBh).subscribe(
      (response) => {
        this.router.navigate(['/entities/autorizacion-bh']);
      }
    );
  }

  update() {
    this.autorizacionBhService.update(this.autorizacionBh._id, this.autorizacionBh).subscribe(
      (response) => {
        this.router.navigate(['/entities/autorizacion-bh']);
      }
    );
  }
}
