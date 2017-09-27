import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuditoriaService } from './auditoria.service';
import { Auditoria } from './auditoria.model';


@Component({
  selector: 'app-auditoria-upsert',
  templateUrl: './auditoria-upsert.component.html'
})
export class AuditoriaUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  auditoria: Auditoria;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auditoriaService: AuditoriaService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.auditoriaService.getById(id).subscribe(auditoria => this.auditoria = auditoria);
      }
    });
  }

  save(formValues) {
    this.auditoria = formValues;
    this.auditoriaService.insert(this.auditoria).subscribe(
      (response) => {
        this.router.navigate(['/entities/auditoria']);
      }
    );
  }

  update() {
    this.auditoriaService.update(this.auditoria._id, this.auditoria).subscribe(
      (response) => {
        this.router.navigate(['/entities/auditoria']);
      }
    );
  }
}
