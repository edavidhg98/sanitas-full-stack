import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { EpsRecobrableService } from './eps-recobrable.service';
import { EpsRecobrable } from './eps-recobrable.model';

import { EntidadService } from '../entidad/entidad.service';
import { Entidad } from '../entidad/entidad.model';

@Component({
  selector: 'app-eps-recobrable-upsert',
  templateUrl: './eps-recobrable-upsert.component.html'
})
export class EpsRecobrableUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  epsRecobrable: EpsRecobrable;

  /** Many-To-One Relationships */
  entidads: Entidad[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private epsRecobrableService: EpsRecobrableService,
    private entidadService: EntidadService,
  ) { }

  ngOnInit() {
    this.entidadService.getAll().subscribe(entidads => this.entidads = entidads);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.epsRecobrableService.getById(id).subscribe(epsRecobrable => this.epsRecobrable = epsRecobrable);
      }
    });
  }

  save(formValues) {
    this.epsRecobrable = formValues;
    this.epsRecobrableService.insert(this.epsRecobrable).subscribe(
      (response) => {
        this.router.navigate(['/entities/eps-recobrable']);
      }
    );
  }

  update() {
    this.epsRecobrableService.update(this.epsRecobrable._id, this.epsRecobrable).subscribe(
      (response) => {
        this.router.navigate(['/entities/eps-recobrable']);
      }
    );
  }
}
