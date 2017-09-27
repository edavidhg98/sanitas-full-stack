import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConsultaExternaPypService } from './consulta-externa-pyp.service';
import { ConsultaExternaPyp } from './consulta-externa-pyp.model';

import { ProcedimientoService } from '../procedimiento/procedimiento.service';
import { Procedimiento } from '../procedimiento/procedimiento.model';

@Component({
  selector: 'app-consulta-externa-pyp-upsert',
  templateUrl: './consulta-externa-pyp-upsert.component.html'
})
export class ConsultaExternaPypUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  consultaExternaPyp: ConsultaExternaPyp;

  /** Many-To-One Relationships */
  procedimientos: Procedimiento[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private consultaExternaPypService: ConsultaExternaPypService,
    private procedimientoService: ProcedimientoService,
  ) { }

  ngOnInit() {
    this.procedimientoService.getAll().subscribe(procedimientos => this.procedimientos = procedimientos);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.consultaExternaPypService.getById(id).subscribe(consultaExternaPyp => this.consultaExternaPyp = consultaExternaPyp);
      }
    });
  }

  save(formValues) {
    this.consultaExternaPyp = formValues;
    this.consultaExternaPypService.insert(this.consultaExternaPyp).subscribe(
      (response) => {
        this.router.navigate(['/entities/consulta-externa-pyp']);
      }
    );
  }

  update() {
    this.consultaExternaPypService.update(this.consultaExternaPyp._id, this.consultaExternaPyp).subscribe(
      (response) => {
        this.router.navigate(['/entities/consulta-externa-pyp']);
      }
    );
  }
}
