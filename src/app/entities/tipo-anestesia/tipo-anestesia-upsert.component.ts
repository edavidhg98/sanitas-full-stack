import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TipoAnestesiaService } from './tipo-anestesia.service';
import { TipoAnestesia } from './tipo-anestesia.model';

import { ProcedimientoService } from '../procedimiento/procedimiento.service';
import { Procedimiento } from '../procedimiento/procedimiento.model';

@Component({
  selector: 'app-tipo-anestesia-upsert',
  templateUrl: './tipo-anestesia-upsert.component.html'
})
export class TipoAnestesiaUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  tipoAnestesia: TipoAnestesia;

  /** Many-To-One Relationships */
  procedimientos: Procedimiento[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tipoAnestesiaService: TipoAnestesiaService,
    private procedimientoService: ProcedimientoService,
  ) { }

  ngOnInit() {
    this.procedimientoService.getAll().subscribe(procedimientos => this.procedimientos = procedimientos);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.tipoAnestesiaService.getById(id).subscribe(tipoAnestesia => this.tipoAnestesia = tipoAnestesia);
      }
    });
  }

  save(formValues) {
    this.tipoAnestesia = formValues;
    this.tipoAnestesiaService.insert(this.tipoAnestesia).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipo-anestesia']);
      }
    );
  }

  update() {
    this.tipoAnestesiaService.update(this.tipoAnestesia._id, this.tipoAnestesia).subscribe(
      (response) => {
        this.router.navigate(['/entities/tipo-anestesia']);
      }
    );
  }
}
