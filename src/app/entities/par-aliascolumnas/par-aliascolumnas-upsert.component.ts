import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ParAliascolumnasService } from './par-aliascolumnas.service';
import { ParAliascolumnas } from './par-aliascolumnas.model';


@Component({
  selector: 'app-par-aliascolumnas-upsert',
  templateUrl: './par-aliascolumnas-upsert.component.html'
})
export class ParAliascolumnasUpSertComponent implements OnInit {

  crudOperationTitle = 'Crear';
  isCreate = true;
  parAliascolumnas: ParAliascolumnas;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private parAliascolumnasService: ParAliascolumnasService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        this.crudOperationTitle = 'Actualizar';
        this.isCreate = false;
        this.parAliascolumnasService.getById(id).subscribe(parAliascolumnas => this.parAliascolumnas = parAliascolumnas);
      }
    });
  }

  save(formValues) {
    this.parAliascolumnas = formValues;
    this.parAliascolumnasService.insert(this.parAliascolumnas).subscribe(
      (response) => {
        this.router.navigate(['/entities/par-aliascolumnas']);
      }
    );
  }

  update() {
    this.parAliascolumnasService.update(this.parAliascolumnas._id, this.parAliascolumnas).subscribe(
      (response) => {
        this.router.navigate(['/entities/par-aliascolumnas']);
      }
    );
  }
}
