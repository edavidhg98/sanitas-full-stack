import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ParFormatoCampoService } from './par-formato-campo.service';
import { ParFormatoCampo } from './par-formato-campo.model';


@Component({
  selector: 'app-par-formato-campo-upsert',
  templateUrl: './par-formato-campo-upsert.component.html'
})
export class ParFormatoCampoUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  parFormatoCampo: ParFormatoCampo;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private parFormatoCampoService: ParFormatoCampoService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.parFormatoCampoService.getById(id).subscribe(parFormatoCampo => this.parFormatoCampo = parFormatoCampo);
      }
    });
  }

  save(formValues) {
    this.parFormatoCampo = formValues;
    this.parFormatoCampoService.insert(this.parFormatoCampo).subscribe(
      (response) => {
        this.router.navigate(['/entities/par-formato-campo']);
      }
    );
  }

  update() {
    this.parFormatoCampoService.update(this.parFormatoCampo._id, this.parFormatoCampo).subscribe(
      (response) => {
        this.router.navigate(['/entities/par-formato-campo']);
      }
    );
  }
}
