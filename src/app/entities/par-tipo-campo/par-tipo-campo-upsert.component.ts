import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ParTipoCampoService } from './par-tipo-campo.service';
import { ParTipoCampo } from './par-tipo-campo.model';


@Component({
  selector: 'app-par-tipo-campo-upsert',
  templateUrl: './par-tipo-campo-upsert.component.html'
})
export class ParTipoCampoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  parTipoCampo: ParTipoCampo;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private parTipoCampoService: ParTipoCampoService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.parTipoCampoService.getById(id).subscribe(parTipoCampo => this.parTipoCampo = parTipoCampo);
      }
    });
  }

  save(formValues) {
    this.parTipoCampo = formValues;
    this.parTipoCampoService.insert(this.parTipoCampo).subscribe(
      (response) => {
        this.router.navigate(['/entities/par-tipo-campo']);
      }
    );
  }

  update() {
    this.parTipoCampoService.update(this.parTipoCampo._id, this.parTipoCampo).subscribe(
      (response) => {
        this.router.navigate(['/entities/par-tipo-campo']);
      }
    );
  }
}
